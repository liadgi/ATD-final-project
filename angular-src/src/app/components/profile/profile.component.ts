import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Profile } from '../../objects';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(
    private router:Router,
    private authService:AuthService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { 
      this.profile = new Profile('',[],[]);
    }

  ngOnInit() {    
    let username = this.route.snapshot.params['username'];
     this.authService.getProfile(username).subscribe((data) => { 
       if (data.success) {
          this.profile = data.profile[0]; 
       } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
       } 
      },
      (err) => { console.log(err);  return false; }
    );
  }

}
