import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API SERVER
  private API_SIGNUP = environment.API_SERVER+'signup';
  constructor(private http: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUp);
  }
}
