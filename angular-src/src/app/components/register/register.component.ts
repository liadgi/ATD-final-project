import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../objects';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService) { }

  ngOnInit() {
    this.user = new User('','','','','');
  }

  onRegisterSubmit(){

    // Validate Fields
    const valid = this.validateService.validateRegister(this.user);
    if(!valid.success){
      this.flashMessage.show(valid.msg, {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Register User
    this.authService.registerUser(this.user).subscribe((data) => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/register']);
      }
    });
    
  }

}
