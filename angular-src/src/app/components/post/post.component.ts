import { Component, OnInit, Input, Output } from '@angular/core';
import { Post, Instruction, Comment } from '../../objects';
import { CommentComponent } from '../comment/comment.component';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter();

  tempComment: Comment;
  isLiked: boolean;
  likeText: String;
  ofUser: boolean;

  @Input() username: string;

  constructor(private authService:AuthService,
              private flashMessage: FlashMessagesService) 
  { }

  setLikeButtonText() {
    if (this.isLiked) {
      this.likeText = 'dislike';
    } else {
      this.likeText = 'like';
    }
  }

  ngOnInit() {
    this.tempComment = new Comment(this.post._id,'','');
    
    this.isLiked = this.post.likes.includes(this.username);
    this.ofUser = this.post.author === this.username;
    this.setLikeButtonText();
  }

  onCommentSubmit() {
    
    this.authService.addComment(this.tempComment).subscribe((data) => {
      if(data.success){
        this.post.comments.push(data.comment);
      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    });
  }

  onLikeSubmit() {
    this.authService.setLike({postId: this.post._id}).subscribe((data) => {
      if(data.success){
        this.isLiked = data.likeStatus;
        if (this.isLiked) {
          this.post.likes.push(data.likedUser);
        } else {
          this.post.likes = this.post.likes.filter(username => username != data.likedUser);
        }
        this.setLikeButtonText();
      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    });
  }

  onDeletePost() {
    this.authService.deletePost({postId: this.post._id}).subscribe((data) => {
      if(data.success){
        this.postDeleted.emit();
        
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});

      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    });
  }

  setAuthor(author:string){
    this.post.author = author;
  }

  setTitle(title:string){
    this.post.title = title;
  }
  
  setDescription(description:string){
    this.post.description = description;
  }

  addIngredient(ingredient:string){
    this.post.ingredients.push(ingredient);
  }

  setIngredients(ingredients:string[]){
    this.post.ingredients = ingredients;
  }

  addInstruction(instruction:Instruction){
    this.post.instructions.push(instruction);
  }

  setInstructions(instructions: Instruction[]){
    this.post.instructions = instructions;
  }

  addLike(like: string){
    this.post.likes.push(like);
  }

  addComment(comment:Comment){
    this.post.comments.push(comment);
  }

}
