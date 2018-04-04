import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  frontName: String;
  middleName: String;
  lastName: String;
  phoneNumber: String;

  constructor(private validateService: ValidateService ,
              private flashMessage:FlashMessagesService,
              private authService: AuthService,
              private  router:Router) {}

  ngOnInit() {
  }

  onRegisterSubmit (){
    //console.log(this.name);
    const  user = {
      frontName: this.frontName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      phoneNumber: this.phoneNumber
    };

    // Required Fields
    /*
    if(!this.validateService.validateRegister(user)){
        this.flashMessage.show('Please fill in all fields',{cssClass:'alert-danger', timeout:5000});
        return false;
    }
    */

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('Please Use valid email', {cssClass: 'alert-danger', timeout: 5000});
        return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data =>{
        if(data.username != null){
          this.flashMessage.show('Conratulations, now you are registered as '+data.username+' and please go to log in', {cssClass: 'alert-success', timeout:5000});
          //console.log("Berhasil Input data");
          this.router.navigate(['/login']);
        }else {
          this.flashMessage.show('Failed Register', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/register']);
          //console.log("Gagal Input data");
        }
      }, error => {
          console.log(error);
          this.flashMessage.show('Unknown Error', {cssClass: 'alert-danger', timeout:5000});
          this.router.navigate(['/register']);
      });

  }

}
