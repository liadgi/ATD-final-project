import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles-search',
  templateUrl: './profiles-search.component.html',
  styleUrls: ['./profiles-search.component.css']
})
export class ProfilesSearchComponent implements OnInit {
  query: String;

  constructor(private profilesService: ProfilesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.params['query'];
    this.profilesService.loadProfiles('search', 1, this.query);
  }
  pageChanged(page) {
    this.profilesService.loadProfiles('search', page, this.query);
  }
}
