import { Component, OnInit, Input, Output } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';


//'http://localhost:8080/upload';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Input() url: string;
  // @Input() images: string[];
  @Output() notifyImageAdded: EventEmitter<string> = new EventEmitter<string>();
  uploader: FileUploader;
  
  constructor() { }

  ngOnInit() {
    
    // if(!this.images) this.images = ['http://localhost:8080/profile_pics/defult_profile_pic.jpg'];
    this.uploader = new FileUploader({url: this.url, itemAlias: 'image', authToken: localStorage.getItem('authToken')});
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, res:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, res);
          let image = JSON.parse(res).path
          // this.images = JSON.parse(res).paths;
          this.notifyImageAdded.emit(image);
    };
  }


}