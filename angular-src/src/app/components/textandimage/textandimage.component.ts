import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textandimage',
  templateUrl: './textandimage.component.html',
  styleUrls: ['./textandimage.component.css']
})
export class TextandimageComponent implements OnInit {
  @Input() text: string;
  @Input() images: string[];
  @Input() relation: number;
  constructor() { }

  ngOnInit() {
    if(this.images.length == 0 || this.relation < 1 || this.relation > 11)
      this.relation = 0;
   }

}
