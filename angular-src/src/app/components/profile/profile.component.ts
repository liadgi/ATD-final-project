import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../objects';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  username: String;
  
  constructor(
    private router:Router,
    private authService:AuthService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.query;
    this.authService.get('users/profile/'+this.username).subscribe(
      (data) => {
        if (data.success) {
          this.user = data.user;
          this.username = data.user.username;
        }
        else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.authService.logout();
        }
      },
      (err) => { throw err; }
    );
  }

}
