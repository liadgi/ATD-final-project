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
    const callback = (data) => {
          // console.log('GOT DATA: ',data);
          this.posts = data.posts;
          this.subject.next(this.posts);
        };
    const error = (err) => { console.log(err); return false; };

    if (type === 'all') {
      this.authService.get('posts', page).subscribe(callback, error);
    } else if (type === 'top') {
      this.authService.get('posts/top', page).subscribe(callback, error);
    } else if (type === 'user') {
      console.log('@@',query);
      this.authService.get('posts/user/' + query, page).subscribe(callback, error);
    } else if (type === 'search') {
      this.authService.get('posts/search/' + query, page).subscribe(callback, error);
    }
  }

  getPostsObservable(): Observable<Post[]> {
    return this.subject.asObservable();
  }

  
}
