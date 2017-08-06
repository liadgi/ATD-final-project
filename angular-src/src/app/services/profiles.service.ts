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

  getProfiles(query: String) {
    this.authService.getProfiles(query).subscribe(
      (data) => {
        this.profiles = data.profiles;
      },
      (err) => { console.log(err); return false; }
    );
  }
}
