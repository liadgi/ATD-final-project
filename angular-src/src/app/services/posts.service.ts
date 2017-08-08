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
      this.authService.getPosts().subscribe(callback, error);
    } else if (type === 'top') {
      this.authService.getTopPosts().subscribe(callback, error);
    } else if (type === 'user') {
      this.authService.getUserPosts(query).subscribe(callback, error);
    } else if (type === 'search') {
      this.authService.searchPosts(query).subscribe(callback, error);
    }
  }
}
