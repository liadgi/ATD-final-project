import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit {

  constructor(  private profilesService: ProfilesService) { }

  ngOnInit() {
    this.profilesService.getProfiles('top');
  }

}
