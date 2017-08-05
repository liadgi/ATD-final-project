import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private profilesService: ProfilesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.profilesService.loadProfiles(undefined);
  }

}
