import { Component, OnInit, Input, Output } from '@angular/core';
import { Post, Instruction, Comment, User } from '../../objects';
import { CommentComponent } from '../comment/comment.component';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EditpostService } from '../../services/editpost.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter();

  tempComment: Comment;
  author: User;
  coauthors: User[];
  isLiked: boolean;
  likeText: String;
  ofUser: boolean;


  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private editPostService: EditpostService){ this.coauthors = []; }

  
  ngOnInit() {
    this.tempComment = new Comment(this.post._id, this.authService.getUsername(), '');
    this.isLiked = this.post.likes.includes(this.authService.getUsername());
    this.ofUser = this.post.author === this.authService.getUsername();
    
    this.authService.get('users/profile/'+this.post.author).subscribe(
      (data) => {
        if (data.success) this.author = data.user;
        else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      },
      (err) => { throw err; }
    );
  }

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  
  onCommentSubmit() {
    console.log(this.tempComment);
    
    this.authService.post('posts/addComment', { 'comment': this.tempComment, 'postId': this.post._id}).subscribe((data) => {
      if (data.success) {
        console.log(data);
        this.post.comments.push(data.comment);        
        this.tempComment = new Comment(this.post._id, this.authService.getUsername(), '');
      } 
      else this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
    });
  }


  onLike() {
    this.authService.post('posts/like', { 'postId': this.post._id }).subscribe((data) => {
      if (data.success) {
        this.isLiked = true;
        this.post.likes.push(data.likedUser);
      }
      else this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
    });
  }

  onDilike() {
    this.authService.post('posts/dislike', { 'postId': this.post._id }).subscribe((data) => {
      if (data.success) {
        this.isLiked = false;
        let index = this.post.likes.indexOf(data.likedUser);
        if(index != -1)
          this.post.likes.splice(index, 1);
      }
      else this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
    });
  }




  onDeletePost() {
    this.authService.post(
      'posts/deletePost',
      { 'postId': this.post._id }).subscribe((data) => {
        if (data.success) {
          this.postDeleted.emit();

          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });

        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }
      });
  }

  onModifyPost() {
    this.editPostService.setPost(this.post);
    this.router.navigate(['/editRecipe']);
  }
}
