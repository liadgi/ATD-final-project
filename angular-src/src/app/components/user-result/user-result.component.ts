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
  @Input() username: string;
  toFollow: String;

  constructor(
  private authService: AuthService,
  private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.setFollowText(this.userResult.followers.includes(this.username));
    
  }

  setFollowText(isFollowing: boolean) {
    this.toFollow = isFollowing ? 'unfollow' : 'follow';
  }

  onFollowSubmit( ) {
    this.authService.post('user/setFollow', {username: this.userResult.username }).subscribe((data) => {
      if (data.success) {
        this.setFollowText(data.isFollowing);
        var index = this.userResult.followers.findIndex((follower) => (follower === this.username));
          if (index != -1) {
            this.userResult.followers.splice(index, 1);
          } else {
            this.userResult.followers.push(this.username);
          }
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    }
    );
  }
}

