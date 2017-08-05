import { Injectable } from '@angular/core';
import { Profile } from '../objects'
import { AuthService } from './auth.service';

@Injectable()
export class ProfilesService {
  profiles: Profile[];

  constructor(private authService: AuthService) { }


  setProfiles(profiles: Profile[]) {
    this.profiles = profiles;
  }

  loadProfiles(query: String) {
    if (query == undefined) {
      this.authService.getProfiles().subscribe(
        (data) => {
          this.profiles = data.profiles;
        },
        (err) => { console.log(err); return false; }
      );
    } else {
      this.authService.searchProfiles(query).subscribe(
        (data) => {
          this.profiles = data.profiles;
        },
        (err) => { console.log(err); return false; }
      );
    }
  }
}
