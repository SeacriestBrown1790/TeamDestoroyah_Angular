import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postloggedin',
  templateUrl: './postloggedin.component.html',
  styleUrls: ['./postloggedin.component.scss']
})
export class PostloggedinComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private http:HttpClient,
    ) {  }

  ngOnInit() {
  
    
  
  
  }


  getMyPosts() {
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
      console.log(product.content+" "+product.date);
      
    }
    }

}
