import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {
  query: String;
  constructor(private usersService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.params['query'];
    this.usersService.loadUsers('search', 1, this.query);
  }
  pageChanged(page) {
    this.usersService.loadUsers('search', page, this.query);
  }

}






  

  

  

