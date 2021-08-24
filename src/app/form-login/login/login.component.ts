import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {SignInForm} from '../../model/SignInForm';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form: any = {};
  hide = true;
  signInForm: SignInForm;
  roles: string[]=[];
  name: string;
  status = 'Please login your account'
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.roles = this.tokenService.getRoles();
      this.name = this.tokenService.getName();
    }
  }
  ngSubMit(){
    // alert('goi submit')
    console.log('goi submit');
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    console.log('this.Signin',this.signInForm);
    this.authService.signIn(this.signInForm).subscribe(data =>{
      if(data.token != undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.name = this.tokenService.getName();
        this.tokenService.setRoles(data.roles);
        this.router.navigate(['user-account']).then(()=>{
          window.location.reload();
        })
      } else {
        this.status = 'Login failed! Please try again!'
      }
    })
  }
}
