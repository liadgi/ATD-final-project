import { Injectable } from '@angular/core';
import { Profile } from '../objects'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProfilesService {
  profiles: Profile[];
  private subject = new Subject<Profile[]>();

  constructor(private authService: AuthService) { }

  loadProfiles(type, page = 1, query: String = null) {
    this.profiles = [];
    if (type === 'top') {
      this.authService.get('profiles/top', page).subscribe(
        (data) => {
          this.profiles = data.profiles;
          this.subject.next(this.profiles);
        },
        (err) => { console.log(err); return false; }
      );
    } else if (type === 'search') {
      this.authService.get('profiles/search/' + query, page).subscribe(
        (data) => {
          this.profiles = data.profiles;
        },
        (err) => { console.log(err); return false; }
      );
    }
  }

  getProfilesObservable(): Observable<Profile[]> {
    return this.subject.asObservable();
  }
}
