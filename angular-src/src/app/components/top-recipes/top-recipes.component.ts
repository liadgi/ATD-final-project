import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { SocketioService } from "../../services/socketio.service";
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-top-recipes',
  templateUrl: './top-recipes.component.html',
  styleUrls: ['./top-recipes.component.css'],
  providers: [SocketioService]
})


export class TopRecipesComponent implements OnInit {
  messages = [];
  connection;
  message;


  constructor(private postsService: PostsService, private socketioService: SocketioService) { }

  ngOnInit() {
    this.postsService.loadPosts('top');
  }


  pageChanged(page) {
    this.postsService.loadPosts('top', page);
  }

}
