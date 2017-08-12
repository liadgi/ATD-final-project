import { Injectable } from '@angular/core';
import { Profile } from '../objects'
import { AuthService } from './auth.service';

@Injectable()
export class ProfilesService {
  profiles: Profile[];

  constructor(private authService: AuthService) { }


  getProfiles(type, query: String = null) {
    this.profiles = [];
    if (type === 'top') {
      this.authService.get('profiles/top').subscribe(
        (data) => {
          this.profiles = data.profiles;
        },
        (err) => { console.log(err); return false; }
      );
    } else if (type === 'search') {
      this.authService.get('profiles/search/' + query).subscribe(
        (data) => {
          this.profiles = data.profiles;
        },
        (err) => { console.log(err); return false; }
      );
    }
  }
}
