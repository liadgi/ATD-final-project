import { Injectable } from '@angular/core';
import { User } from '../objects'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  users: User[];
  private subject = new Subject<User[]>();

  constructor(private authService: AuthService) { }

  loadUsers(type, page = 1, query: String = null) {
    this.users = [];
    if (type === 'top') {
      this.authService.get('users/top', page).subscribe(
        (data) => {
          this.users = data.users;
          this.subject.next(this.users);
        },
        (err) => { console.log(err); return false; }
      );
    } else if (type === 'search') {
      this.authService.get('users/search/' + query, page).subscribe(
        (data) => {
          this.users = data.users;
        },
        (err) => { console.log(err); return false; }
      );
    }
  }

  getUsersObservable(): Observable<User[]> {
    return this.subject.asObservable();
  }

}
