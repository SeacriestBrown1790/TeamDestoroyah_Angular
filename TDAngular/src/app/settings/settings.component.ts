import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private http:HttpClient,
    ) { }

  ngOnInit() {
  
  
  }

  submissionUpdate(form: NgForm) {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/users/update.app", {
      
      
      userpass: form.value.userpass,
      user_id: JSON.parse(sessionStorage.getItem("user")).user_id,
      firstname: JSON.parse(sessionStorage.getItem("user")).firstname,
      lastname: JSON.parse(sessionStorage.getItem("user")).lastname,
      username: JSON.parse(sessionStorage.getItem("user")).username,
      age: JSON.parse(sessionStorage.getItem("user")).age,
      birthday: JSON.parse(sessionStorage.getItem("user")).birthday,
      gender: JSON.parse(sessionStorage.getItem("user")).gender,
      email: JSON.parse(sessionStorage.getItem("user")).email,
      post: JSON.parse(sessionStorage.getItem("user")).post,
     
    })
    .toPromise()
    .then((r: {username: string; userpass: string;age: number; gender: string; birthday: Date; firstname: string;lastname: string;email: string}) => {
      console.log(r);
      form.reset();
    
    })
    .catch(e => console.log(e));
    
  
  }

  // submissionUpdate(form: NgForm) {
  //   this.http
  //   .post("http://localhost:8080/TeamDestoroyah/users/update.app", {
      
  //     username: form.value.username,
  //       userpass: form.value.userpass,
  //       age: this.getAge(form.value.birthday),
  //       gender: form.value.gender,
  //       birthday: form.value.birthday,
  //       firstname: form.value.firstname,
  //       lastname: form.value.lastname,
  //       email: form.value.email 
     
  //   })
  //   .toPromise()
  //   .then((r: {username: string; userpass: string;age: number; gender: string; birthday: Date; firstname: string;lastname: string;email: string}) => {
  //     console.log(r);
  //     form.reset();
  //     // this.ngOnInit();

  //   })
  //   .catch(e => console.log(e));
    
  
  // }
  // getAge(birthdate){
  //   console.log(Date.parse(birthdate));
  //   let timeDiff = Math.abs(Date.now() - Date.parse(birthdate));
  //   console.log(timeDiff);
  //   let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  //   console.log(age)
  //   return age;
  // }

 

}
