import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
 @Input() username: String;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.loadPosts("user", this.username);    
  }

}
