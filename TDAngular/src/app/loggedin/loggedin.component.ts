import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  loginUserData = {}

  constructor(/*private _auth: AuthService*/ private http:HttpClient,private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  // loginUser(){
  //   this._auth.loginUser(this.loginUserData).subscribe(
  //     res => console.log(res),
  //     err => console.log(err)
  //   )

  // }

  submission(form: NgForm) {
    this.http
      .post("http://localhost:8080/TeamDestoroyah/users/login.app", {
        email: form.value.email,
        password: form.value.password,
        
      })
      .toPromise()
      .then((r: { email: string;password: string }) => {
        console.log(r);
        sessionStorage.setItem("email", JSON.stringify(r));
        if(r!=null){
          this.onLogInButtonClick();
        }
      })
      .catch(e => console.log(e));
      
  }
  onLogInButtonClick(): void{
    this._router.navigate(['wall'])
  }

  onRegisterButtonClick(): void{
    this._router.navigate(['register'])
  }

}
