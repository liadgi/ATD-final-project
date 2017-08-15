import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../objects';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {
  @Input() userResult: User;  
  isFollowing: boolean;

  constructor(
  private authService: AuthService,
  private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.isFollowing = this.userResult.followers.includes(this.authService.getUsername());
  }

  onFollow( ) {
    this.authService.post('users/follow', {username: this.userResult.username }).subscribe((data) => {
      if (data.success) {
        this.isFollowing = true;
        //TODO: make shit change
      }
      else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    });
  }

    onUnfollow( ) {
    this.authService.post('users/unfollow', {username: this.userResult.username }).subscribe((data) => {
      if (data.success) {
        this.isFollowing = false;        
        //TODO: make shit change
      }
      else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    });
  }



}

