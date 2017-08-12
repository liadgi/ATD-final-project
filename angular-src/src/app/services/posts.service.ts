import { Injectable } from '@angular/core';
import { Post } from '../objects';
import { AuthService } from './auth.service';

@Injectable()
export class PostsService {
  posts: Post[];

  constructor(private authService: AuthService) {

  }


  loadPosts(type, query: String = null) {
    this.posts = [];
    let callback = (dashboard) => {
          this.posts = dashboard.posts;
        };
    let error = (err) => { console.log(err); return false; };

    if (type === 'all') {
      this.authService.get('dashboard').subscribe(callback, error);
    } else if (type === 'top') {
      this.authService.get('dashboard/top').subscribe(callback, error);
    } else if (type === 'user') {
      this.authService.get('dashboard/user/' + query).subscribe(callback, error);
    } else if (type === 'search') {
      this.authService.get('dashboard/search/' + query).subscribe(callback, error);
    }
  }
}
