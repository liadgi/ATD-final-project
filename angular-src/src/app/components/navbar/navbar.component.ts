import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchFor: string;
  topRes: string;
  query: String;
  dropdownClass = { 'dropdown': true, 'open': false };
  topmostDropdownClass = { 'dropdown': true, 'open': false };

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private postsService: PostsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.query = '';
    this.searchFor = 'Recipes';
    this.topRes = '';
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
    if (this.query !== '') {
      if (this.searchFor === "Users") {
        this.usersService.getUsers('search', this.query);
        this.router.navigate(['users/search', this.query]);
      } else if (this.searchFor === "Recipes") {
        this.postsService.loadPosts('search', this.query);
        this.router.navigate(['dashboard/search', this.query]);
      }
      this.query = '';
    }
  }


  toggleDropdown() {
    this.dropdownClass.open = !this.dropdownClass.open;
  }
  toggleTopmostDropdown() {
    this.topmostDropdownClass.open = !this.topmostDropdownClass.open;
    this.topRes = '';
  }

}
