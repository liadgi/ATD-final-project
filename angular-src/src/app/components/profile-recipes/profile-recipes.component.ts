import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-profile-recipes',
  templateUrl: './profile-recipes.component.html',
  styleUrls: ['./profile-recipes.component.css']
})
export class ProfileRecipesComponent implements OnInit {
  @Input() username: String;
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.loadPosts("user", 1, this.username);
  }
  
  pageChanged(page) {
    this.postsService.loadPosts("user", page, this.username);
  }

}
