import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User, formatName} from '../../objects';
import { ActivatedRoute } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  user: User;

  constructor(
    private router:Router,
    private authService:AuthService,
    private validateService: ValidateService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.get('users/'+this.authService.getId()).subscribe(
      (data) => {
        if (data.success) this.user = data.user;
        else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      },
      (err) => { throw err; }
    );
  }

  createCallback (){
    return (data) => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
      }
      else this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    } 
  }

  updateUsername(){
    if(!this.validateService.validateUsername(this.user.username))
      this.flashMessage.show('Please enter a valid first name.', {cssClass: 'alert-danger', timeout: 5000}); 
    else this.authService.post(
        'users/update/username/'+this.user._id,
        {'token': this.authService.authToken, 'username': this.user.username}
      ).subscribe(this.createCallback());
  }

  updatePassword(){
    if(!this.validateService.validatePassword(this.user.password))
      this.flashMessage.show('Please enter a valid password.', {cssClass: 'alert-danger', timeout: 5000}); 
    else this.authService.post(
        'users/update/password/'+this.user._id,
        {'token': this.authService.authToken, 'password': this.user.password}
      ).subscribe(this.createCallback());
  }

  updateFirstName(){
    this.user.fname = formatName(this.user.fname);
    if(!this.validateService.validateName(this.user.fname))
      this.flashMessage.show('Please enter a valid first name.', {cssClass: 'alert-danger', timeout: 5000}); 
    else this.authService.post(
        'users/update/fname/'+this.user._id,
        {'token': this.authService.authToken, 'fname': this.user.fname}
      ).subscribe(this.createCallback());
  }

  updateLastName(){
    this.user.lname = formatName(this.user.lname);
    if(!this.validateService.validateName(this.user.lname))
      this.flashMessage.show('Please enter a valid last name.', {cssClass: 'alert-danger', timeout: 5000}); 
    else this.authService.post(
        'users/update/lname/'+this.user._id,
        {'token': this.authService.authToken, 'lname': this.user.lname}
      ).subscribe(this.createCallback());
  }

  updateEmail(){
    if(!this.validateService.validateEmail(this.user.email))
      this.flashMessage.show('Please enter a valid email.', {cssClass: 'alert-danger', timeout: 5000}); 
    else this.authService.post(
        'users/update/email/'+this.user._id,
        {'token': this.authService.authToken, 'email': this.user.email}
      ).subscribe(this.createCallback());
  }

  updateBirthday(){ 
    this.authService.post(
      'users/update/birthday/'+this.user._id,
      {'token': this.authService.authToken, 'birthday': this.user.birthday}
    ).subscribe(this.createCallback());
  }

  // onSubmit() {
  //   this.user.fname = formatName(this.user.fname);
  //   this.user.lname = formatName(this.user.lname);
  //   // Validate Fields
  //   const valid = this.validateService.validateRegister(this.user);
  //   if(!valid.success){
  //     this.flashMessage.show(valid.msg, {cssClass: 'alert-danger', timeout: 5000});
  //     return false;
  //   }
  // 
  //   // Update User
  //   this.authService.updateUser(this.user).subscribe((data) => {
  //     if(data.success){
  //       this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
  //       this.router.navigate(["['/profile', authService.getUsername()]"]);
  //     }else{
  //       this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
  //     }
  //   });
  // }

}
