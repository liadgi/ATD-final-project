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


export class TopRecipesComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;


  constructor(private postsService: PostsService, private socketioService: SocketioService) { }

  ngOnInit() {

    // this.connection = this.socketioService.getMessages('top-posts').subscribe((post) => {
    //   console.log('1!!!!got: ',post);
    // });

    // this.connection = this.socketioService.getMessages('message').subscribe((message) => {
    //   console.log('2!!!!got: '+message);
    //   this.messages.push(message);
    // });
    
    // this.connection = this.socketioService.getMessages('post').subscribe(message => {
    //   console.log("POSTPOST!!!");
    // });
    // this.connection = this.socketioService.getMessages('profile').subscribe(message => {
    //   console.log("POROFILEPROFILE!!!");
    // });


    // //check if the user is logged in
    // if (this.auth.loggedIn()) {
    //   //for most Liked Recipes
    //   let send = {user_id: this.auth.getLogoedInUser()["_id"]};
    //   console.log("send", send);
    //   this.http
    //   //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
    //     .post('http://127.0.0.1:3001/users/LikedPost/', send).map((res: Response) => res.json()).subscribe(
    //     //map the success function and alert the response
    //     (success) => {
    //       console.log(success.msg);
    //       this.mostLikedRecipes = success.msg;

    //     },
    //     (error) => alert(error));

    //   // for most Like Users
    //   let send2 = {user_id: this.auth.getLogoedInUser()["_id"]};
    //   console.log("send", send2);
    //   this.http
    //   //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
    //     .post('http://127.0.0.1:3001/users/LikedUsers', send2).map((res: Response) => res.json()).subscribe(
    //     //map the success function and alert the response
    //     (success) => {
    //       console.log("hello", success.msg, typeof success.msg);
    //       this.mostLikeUsers = success.msg;

    //     },
    //     (error) => alert(error));

    // }

    // this.connection = this.socketioService.getMessages('post').subscribe(message => {
    //     location.reload();
    //     //console.log("get emit from the server");
    //     let send = {post_id:this.thisPost["_id"]};
    //     this.http.post('http://127.0.0.1:3001/posts/getSinglePost', send).map((res: Response) => res.json()).subscribe(
    //       //map the success function and alert the response
    //       (success) => {
    //         console.log(success.msg);
    //         this.thisPost=success.msg;
    //         location.reload();
    //       },
    //       (error) => alert(error));


    //   });



    this.postsService.loadPosts('top');
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  pageChanged(page) {
    this.postsService.loadPosts('top', page);
  }

  sendMessage(){
    this.socketioService.sendMessage('add-message',this.message);
    this.message = '';
  }


}
