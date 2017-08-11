import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Post, Instruction } from '../../objects';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, NavigationStart } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  username: String;
  page: number;

  @Output() notifyPageChanged: EventEmitter<number> = new EventEmitter<number>();
  subscription: Subscription;
  subscriptionUrlChange: Subscription;

  hasNextPage: boolean;
  hasPreviousPage: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private postsService: PostsService) {

  }

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.page = 1;
    this.hasPreviousPage = false;
    this.hasNextPage = false;

    this.subscriptionUrlChange = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.page = 1;
      }
    });

    this.subscription = this.postsService.getPostsObservable().subscribe(posts => {
      if (this.page == 1) { // disable previous
        this.hasPreviousPage = false;
      } else {
        this.hasPreviousPage = true;
      }
      if (this.postsService.posts.length < 10) { // disable next
        this.hasNextPage = false;
      } else {
        this.hasNextPage = true;
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();

    this.subscriptionUrlChange.unsubscribe();
  }

  // TODO : add modal and green alert
  onPostDeleted(post) {
    var index = this.postsService.posts.findIndex((pst) => (pst === post));
    if (index != -1) {
      this.postsService.posts.splice(index, 1);
    }
  }

  onPreviousPage() {
    if (this.hasPreviousPage) {
      this.page--;
      this.notifyPageChanged.emit(this.page);
    }
  }

  onNextPage() {
    if (this.hasNextPage) {
      this.page++;
      this.notifyPageChanged.emit(this.page);
    }
  }


}