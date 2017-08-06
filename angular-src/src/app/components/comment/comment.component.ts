import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../objects';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment:Comment;
 // TODO : delete text from comment box after submitting
  constructor() { }

  ngOnInit() {
  }

}
