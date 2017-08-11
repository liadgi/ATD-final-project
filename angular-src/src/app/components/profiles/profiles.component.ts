import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';
import { Router, NavigationStart } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// TODO : fix the code duplication.
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  username: String;
  page: number;

  @Output() notifyPageChanged: EventEmitter<number> = new EventEmitter<number>();
  subscription: Subscription;
  subscriptionUrlChange: Subscription;

  hasNextPage: boolean;
  hasPreviousPage: boolean;


  constructor(private profilesService: ProfilesService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.page = 1;
    this.hasPreviousPage = false;
    this.hasNextPage = false;

    this.subscriptionUrlChange = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.page = 1;
      }
    });

    this.subscription = this.profilesService.getProfilesObservable().subscribe(posts => {
      if (this.page == 1) { // disable previous
        this.hasPreviousPage = false;
      } else {
        this.hasPreviousPage = true;
      }
      if (this.profilesService.profiles.length < 10) { // disable next
        this.hasNextPage = false;
      } else {
        this.hasNextPage = true;
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();

    this.subscriptionUrlChange.unsubscribe();
  }

  onPreviousPage() {
    if (this.hasPreviousPage) {
      this.page--;
      this.notifyPageChanged.emit(this.page);
    }
  }

  onNextPage() {
    if (this.hasNextPage) {
      this.page++;
      this.notifyPageChanged.emit(this.page);
    }
  }

}
