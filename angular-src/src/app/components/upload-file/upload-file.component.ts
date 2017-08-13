import { Component, OnInit, Input, Output } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  
  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    
    // if(!this.images) this.images = ['http://localhost:8080/defult_profile_pic.jpg'];
    this.uploader = new FileUploader({url: this.url, itemAlias: 'image', authToken: localStorage.getItem('authToken')});
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, res:any, status:any, headers:any) => {
      let image = JSON.parse(res).path   
      this.flashMessage.show('Image Uploaded!', { cssClass: 'alert-success', timeout: 5000 });
      //console.log("ImageUpload:uploaded:", item, status, res);
      this.notifyImageAdded.emit(image);
    };
  }


}