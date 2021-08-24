import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  status = 'Please fill in the form to register!';
  form: any = {};
  signUpForm: SignUpForm;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  hide = true;
  error1: any = {
    message: "nouser"
  }
  error2: any = {
    message: "noemail"
  }
  success: any = {
    message: "yes"
  }
  isRegisterSuccess = false;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
ngSubmit(){
  this.signUpForm = new SignUpForm(
    this.form.name,
    this.form.username,
    this.form.email,
    this.form.password
  )
  this.authService.signUp(this.signUpForm).subscribe(data =>{
    if(JSON.stringify(data)==JSON.stringify(this.error1)){
      this.status = 'The username is existed! Please try again!'
    }
    if(JSON.stringify(data)==JSON.stringify(this.error2)){
      this.status = 'The email is existed! Please try again!'
    }
    if(JSON.stringify(data)==JSON.stringify(this.success)){
      this.isRegisterSuccess = true;
      this.status = 'Create User account success -->'
    }
  })
}
}
