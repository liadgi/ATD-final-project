import { Injectable } from '@angular/core';
import { User } from '../objects'
import { AuthService } from './auth.service';

@Injectable()
export class UsersService {
    users: User[];

  constructor(private authService: AuthService) { }

  getUsers(type, query: String = null) {
    this.users = [];
    if (type === 'top') {
      this.authService.get('users/top').subscribe(
        (data) => {
          this.users = data.users;
        },
        (err) => { console.log(err); return false; }
      );
    } else if (type === 'search') {
      this.authService.get('users/search/' + query).subscribe(
        (data) => {
          this.users = data.users;
        },
        (err) => { console.log(err); return false; }
      );
    }
  }

}
