import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { ProfilesService } from '../../services/profiles.service';

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
    private postsService: PostsService,
    private profilesService: ProfilesService
  ) { }

  ngOnInit() {
    this.searchFor = 'profile';
    this.query = '';
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });

    this.router.navigate(['/']);
    return false;
  }

  onSearchSubmit() {
    //TODO : prettify that
    // and fix the double loading problem at a later phase
    if (this.searchFor === "profile") {
      this.profilesService.getProfiles(this.query);
      this.router.navigate(['profiles', this.query ]);
    } else if (this.searchFor === "recipe") {
      this.postsService.setPosts([]);
      this.postsService.loadPosts(this.query);
      this.router.navigate(['dashboard', this.query]);
    }

    

  }


}
