import { Injectable } from '@angular/core';
import { Post} from '../objects';
import { AuthService } from './auth.service';

@Injectable()
export class PostsService {
  posts: Post[];

  constructor(private authService:AuthService) {
    
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  getDashboard() {
      this.authService.getDashboard().subscribe(
      (dashboard) => {
        this.posts = dashboard.posts;
      },
      (err) => { console.log(err); return false; }
    );
  }

}
