import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../objects';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  isFollowing: boolean;

  constructor(
    private router:Router,
    private authService:AuthService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {    
    if(!this.user) {
      this.flashMessage.show('Invalid User', {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['/']);
    }
    else this.isFollowing = this.user.followers.includes(this.authService.getUsername());
  }


  onFollow( ) {
    this.authService.post('users/follow', {username: this.user.username }).subscribe((data) => {
      if (data.success) {
        this.isFollowing = true;
        //TODO: make shit change
      }
      else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    });
  }

    onUnfollow( ) {
      this.authService.post('users/unfollow', {username: this.user.username }).subscribe((data) => {
        if (data.success) {
          this.isFollowing = false;        
          //TODO: make shit change
        }
        else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      });
    }

    onShowFollowing() { 
      console.log('!Show following: implement this');
    }


    onShowFollowers() { 
      console.log('!Show followers: implement this');
    }

}
