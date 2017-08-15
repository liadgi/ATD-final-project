import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, NavigationStart } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// NOTE : fix the code duplication.
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  page: number;

  @Output() notifyPageChanged: EventEmitter<number> = new EventEmitter<number>();
  subscription: Subscription;
  subscriptionUrlChange: Subscription;

  hasNextPage: boolean;
  hasPreviousPage: boolean;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.page = 1;
    this.hasPreviousPage = false;
    this.hasNextPage = false;

    this.subscriptionUrlChange = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.page = 1;
      }
    });

    this.subscription = this.usersService.getUsersObservable().subscribe(posts => {
      if (this.page == 1) this.hasPreviousPage = false; // disable previous
      else this.hasPreviousPage = true;
      if (this.usersService.users || this.usersService.users.length < 10) 
        this.hasNextPage = false; // disable next
      else this.hasNextPage = true;
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
