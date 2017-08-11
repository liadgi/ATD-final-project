import { Injectable } from '@angular/core';
import { Post } from '../objects';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostsService {
  posts: Post[];
  private subject = new Subject<Post[]>();

  constructor(private authService: AuthService) {

  }


  loadPosts(type, page = 1, query: String = null) {
    this.posts = [];
    let callback = (dashboard) => {
          this.posts = dashboard.posts;
          this.subject.next(this.posts);
        };
    let error = (err) => { console.log(err); return false; };

    if (type === 'all') {
      this.authService.getPosts(page).subscribe(callback, error);
    } else if (type === 'top') {
      this.authService.getTopPosts(page).subscribe(callback, error);
    } else if (type === 'user') {
      this.authService.getUserPosts(page, query).subscribe(callback, error);
    } else if (type === 'search') {
      this.authService.searchPosts(page, query).subscribe(callback, error);
    }
  }

  getPostsObservable(): Observable<Post[]> {
    return this.subject.asObservable();
  }

  
}
