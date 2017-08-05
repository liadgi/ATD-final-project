import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../objects';

@Component({
  selector: 'app-profile-result',
  templateUrl: './profile-result.component.html',
  styleUrls: ['./profile-result.component.css']
})
export class ProfileResultComponent implements OnInit {
  @Input() profileResult: Profile;

  constructor() { }

  ngOnInit() {
  }

}
