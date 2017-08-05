import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Post, Instruction } from '../../objects';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: String;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit() {
    let query = this.route.snapshot.params['query'];
    this.postsService.loadPosts(query);

    this.username = this.authService.getUsername();
  }

  // TODO : add modal and green alert
  onPostDeleted(post) {
    var index = this.postsService.posts.findIndex((pst) => (pst === post));
    if (index != -1) {
      this.postsService.posts.splice(index, 1);

      this.flashMessage.show('bla bla ', { cssClass: 'alert-success', timeout: 5000 });
    }
  }

}