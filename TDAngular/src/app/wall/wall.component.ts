import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, Subscription } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
// import  * as AWS from 'aws-sdk';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})


export class WallComponent implements OnInit {



  
  showMainContent: Boolean = true;

  showMainContent1: Boolean = true;

  showMainContent2: Boolean = true;


  showMainContent3: Boolean = true;


  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private http:HttpClient,
    private route : ActivatedRoute,
    private router : Router,
    
    ) {  }

name : string = JSON.parse(sessionStorage.getItem("user")).username;
myId: string = JSON.parse(sessionStorage.getItem("user")).user_id; 




  ngOnInit() {

  

    this.getMyPosts();
  }
  
  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
    this.addPost();
 }

 ShowHideButton1() {
  this.showMainContent1 = this.showMainContent1 ? false : true;
}

ShowHideButton2() {
  this.showMainContent2 = this.showMainContent2 ? false : true;
}
  
ShowHideButton3() {
  this.showMainContent3 = this.showMainContent3 ? false : true;
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

buttonClick() {
  this.router.navigateByUrl('app-wall');

}
submissionPic(form: NgForm) {
  this.http
  .post("http://localhost:8080/TeamDestoroyah/photos/getAll.app", {
    
      id: form.value.id,
   
  })
  .toPromise()
  .then((r: {id:number;}) => {
    console.log(r);
    this.selectPhoto(r, form.value.id);
    sessionStorage.setItem("url", JSON.stringify(r));
    let x = JSON.parse(sessionStorage.getItem("url")).url
    console.log(x);

    document.getElementById("userpic").innerHTML +="<img class='fit-picture'src="+x+" alt='Grapefruit slice atop a pile of other slices'>";
    form.reset();

    
  })
  .catch(e => console.log(e));
}

// myCtrl($scope) {    
//   AWS.config.update({
// accessKeyId: 'AKIA34DHIUGQ5EV7HXWA', secretAccessKey: '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'});
//   AWS.config.region = "us-east-2";

// let bucket = new AWS.S3();

//   bucket.getObject({Bucket: "cloud.monsterparty.com", Key: "fartman0.5025455805794254.jpeg"},function(err,file){

// })};

//  encode(data)
// {
//   var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
//   return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
// }

selectPhoto(obj, id){
  for(let huh of obj ){
    console.log(huh);
    if(huh.id==id){
      let here = huh.url;
      return here;
    }
  }

}

  
  submission(form: NgForm) {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/users/postIn.app", {
      
        content: form.value.content,
        
        
        date: this.currentDate(),
        
      user: JSON.parse(sessionStorage.getItem("user")), 
     
    })
    .toPromise()
    .then((r: {content:string;date:Date;user:object}) => {
      console.log(r.content);
      console.log(r);
      // form.reset();
      // this.ngOnInit();
      this.getMyPosts();
    })
    .catch(e => console.log(e));
    
  
  }


  vidSubmission(form: NgForm) {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/video/videoIn.app", {
      
      videoname: form.value.videoname,
      videocode: form.value.videocode,

        
        date: this.currentDate(),
        
      user: JSON.parse(sessionStorage.getItem("user")),
     
    })
    .toPromise()
    .then((p: {videoname:string;videocode:string}) => {
      console.log(p);
      form.reset();
      // this.ngOnInit();
     
    })
    .catch(e => console.log(e));
    
  }

  submissionUser(form: NgForm) {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/users/getUsername.app", {
      
        username: form.value.username,
        
     
    })
    .toPromise()
    .then((r: {username:string}) => {
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
    this.clear();
    this.http
    .post("http://localhost:8080/TeamDestoroyah/post/getAll.app", {
        
      // id: JSON.parse(sessionStorage.getItem("user")).user_id,
     
    })
    .toPromise()
    .then((r: {}) => {
      // document.getElementById('huh').innerHTML+="test";
      // console.log(r);
      this.itsWut(r);
    })
    .catch(e =>  console.log(e));
    
    
  }

  itsWut(obj){
  
    for(let product of obj){
      console.log(product);
      // let id = JSON.parse(sessionStorage.getItem("user")).user_id;
     
      // if(product.id==id){
    	
     document.getElementById("tickets").innerHTML += '<div style="padding-left: 10px; border-radius: 20px; padding-top: 20px; margin-top: 20px;color: green;font-family: verdana;text-left: center;font-size: 21px;color: #ffffff;background-color: rgb(0, 0, 0);text-shadow: rgb(0, 0, 0) 6px 2px 2px; ">'+product.content+" <div style=' color:  rgb(0, 224, 224);display: inlineblock;position: absolute; margin-left: 720px; margin-top: -10px'>Post Id:"+product.date+'</div></div>'; 
      // }
     }
    }

  getMyVids() {
    this.http
    .post("http://localhost:8080/TeamDestoroyah/video/getAllVids.app", {
        
      // id: JSON.parse(sessionStorage.getItem("user")).user_id,
     
    })
    .toPromise()
    .then((r: {}) => {
      // document.getElementById('huh').innerHTML+="test";
      // console.log(r);
      this.itsWuut(r);
    })
    .catch(e =>  console.log(e));
    
    
  }

  itsWuut(obj){
  
    for(let product of obj){
      console.log(product);
      // let id = JSON.parse(sessionStorage.getItem("user")).user_id;
     
      // if(product.id==id){
    	
     document.getElementById("thevids").innerHTML += '<div style="padding-left: 10px; border-radius: 20px; padding-top: 20px; margin-top: 20px;color: green;font-family: verdana;text-left: center;font-size: 21px;color: #ffffff;background-color: rgb(0, 0, 0);text-shadow: rgb(0, 0, 0) 6px 2px 2px; ">'+product.videoname+" <div style=' color:  rgb(0, 224, 224);display: inlineblock;position: absolute; margin-left: 720px; margin-top: -10px'>Post Id:"+product.videocode+'</div></div>'; 
      // }
     }
    }

    clear() {
      document.getElementById("tickets").innerHTML = "";
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
      // this.ngOnInit();
      this.getMyPosts();
    })
    .catch(e => console.log(e));
    
  
  }


 




}
