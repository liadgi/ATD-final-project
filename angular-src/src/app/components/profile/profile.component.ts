import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Profile } from '../../objects';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { 
      this.profile = new Profile('',[],[]);
    }

  ngOnInit() {    
    let username = this.route.snapshot.params['username'];
     this.authService.getProfile(username).subscribe(
      (data) => { 
        this.profile = data.profile; 
      },
      (err) => { console.log(err);  return false; }
    );
  }

}
