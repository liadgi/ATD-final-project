import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit {

  constructor(  private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.loadUsers('top');
  }
  pageChanged(page) {
    this.usersService.loadUsers('top', page);
    
  }

}
