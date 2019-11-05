import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private http:HttpClient,
    ) { }

name : string = JSON.parse(sessionStorage.getItem("user")).username;
myId: String = JSON.parse(sessionStorage.getItem("user")).user_id; 

  ngOnInit() {
    this.getMyPosts();
  }
  getUser(){
    let user = {
  user_id: JSON.parse(sessionStorage.getItem("user")).user_id,
  firstname: JSON.parse(sessionStorage.getItem("user")).firstname,
  lastname: JSON.parse(sessionStorage.getItem("user")).lastname,
  username: JSON.parse(sessionStorage.getItem("user")).username,
  birthday: JSON.parse(sessionStorage.getItem("user")).birthday,
  gender: JSON.parse(sessionStorage.getItem("user")).gender,
  email: JSON.parse(sessionStorage.getItem("user")).email,
  post: JSON.parse(sessionStorage.getItem("user")).post,
  }
  return user;
};


  
  submission(form: NgForm) {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/users/postIn.app", {
      
        content: form.value.content,
        
        date: this.currentDate(),
        
      user: JSON.parse(sessionStorage.getItem("user")),
     
    })
    .toPromise()
    .then((r: {content:string;date:Date;user:object}) => {
      console.log(r);
    })
    .catch(e => console.log(e));
    
  }
  currentDate(){
    let date = Date.now();
    console.log(date);
    return date
  }

 
  addPost() {
    let user= JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log(user);
      
    return user
  }

  getMyPosts() {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/post/getAll.app", {
        
      // id: JSON.parse(sessionStorage.getItem("user")).user_id,
     
    })
    .toPromise()
    .then((r: {}) => {
      console.log(r);
    })
    .catch(e => document.getElementById('inc').innerHTML+=e);
    
  }


  

  getPhotoTemp() {
    let photoSetUp = {
      id: 1,
      date: Date.now(),
      url: String,
     
    };
    return photoSetUp;
  }


  onExitButtonClick(): void{
    this._router.navigate(['landing'])
    sessionStorage.clear();
  }



}
