import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../objects';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService) { }

  ngOnInit() {
    this.credentials = new Credentials('','');
  }

  onLoginSubmit(){

    // Validate Fields
    const valid = this.validateService.validateLogin(this.credentials);
    if(!valid.success){
      this.flashMessage.show(valid.msg, {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.authService.authenticateUser(this.credentials)
    .subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.credentials);
        this.flashMessage.show('You are now logged in.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['home']);
      } else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      }   
    });
  }

}
