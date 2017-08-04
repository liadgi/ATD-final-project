import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchFor: string;
  query: String;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private postsService: PostsService) { }

  ngOnInit() {
    this.searchFor = 'author';
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['/']);
    return false;
  }

  onSearchSubmit() {
    this.authService.search(this.searchFor, this.query).subscribe((data) => {
      if(data.success){
        if (data.resType === "author") {
          // change to authors list later
          this.postsService.setPosts(data.posts);
        } else if (data.resType === "recipe") {
            this.postsService.setPosts(data.posts);
        }
      } else {
        //this.flashMessage.show(data.msg, {cssClass: 'alert-', timeout: 5000});
      }
  });
  }

}
