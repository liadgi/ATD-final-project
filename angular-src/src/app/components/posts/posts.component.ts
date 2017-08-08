import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Post, Instruction } from '../../objects';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  username: String;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  // TODO : add modal and green alert
  onPostDeleted(post) {
    var index = this.postsService.posts.findIndex((pst) => (pst === post));
    if (index != -1) {
      this.postsService.posts.splice(index, 1);

      this.flashMessage.show('Successfully deleted post', { cssClass: 'alert-success', timeout: 5000 });
    }
  }

}