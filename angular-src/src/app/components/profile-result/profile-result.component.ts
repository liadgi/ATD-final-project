import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../objects';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile-result',
  templateUrl: './profile-result.component.html',
  styleUrls: ['./profile-result.component.css']
})
export class ProfileResultComponent implements OnInit {
  @Input() profileResult: Profile;
  toFollow: String;
  @Input() username: string;
  constructor(
  private authService: AuthService,
  private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.setFollowText(this.profileResult.followers.includes(this.username));

  }

  setFollowText(isFollowing: boolean) {
    this.toFollow = isFollowing ? 'unfollow' : 'follow';
  }

  onFollowSubmit( ) {
    this.authService.setFollow(this.profileResult.username).subscribe((data) => {
      if (data.success) {
        this.setFollowText(data.isFollowing);
        var index = this.profileResult.followers.findIndex((follower) => (follower === this.username));
          if (index != -1) {
            this.profileResult.followers.splice(index, 1);
          } else {
            this.profileResult.followers.push(this.username);
          }
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
    }
    );
  }

}
