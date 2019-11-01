import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private http:HttpClient,
    private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  submission(form: NgForm) {
    this.http
      .post("http://localhost:8080/TeamDestoroyah/users/putIn.app", {
        username: form.value.username,
        userpass: form.value.userpass,
        age: form.value.age,
        gender: form.value.gender,
        bithday: form.value.birthday,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email 
      })
      .toPromise()
      .then((r: { username: string; userpass: string;age: number; gender: string; birthday: Date; firstname: string;lastname: string;email: string }) => {
        console.log(r);
        sessionStorage.setItem("username", JSON.stringify(r));
      })
      .catch(e => console.log(e));
  }

  onRegisterButtonClick(): void{
    this._router.navigate(['wall'])
  }



}
