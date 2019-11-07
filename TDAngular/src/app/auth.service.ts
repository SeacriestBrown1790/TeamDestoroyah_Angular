import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8080/TeamDestoroyah/users/login.app";

  constructor(private http: HttpClient) { }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  
  
}