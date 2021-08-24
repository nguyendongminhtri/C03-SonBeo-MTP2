import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {JwtResponse} from '../model/JwtResponse';
import {SignInForm} from '../model/SignInForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API SERVER
  private API_SIGNUP = environment.API_SERVER+'signup';
  private API_SIGNIN = environment.API_SERVER+'signin';
  constructor(private http: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }

}
