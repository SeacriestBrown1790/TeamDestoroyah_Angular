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

  ngOnInit() {
  }

  submission(form: NgForm) {
    this.http
      .post("http://localhost:8080/TeamDestoroyah/post/postIn.app", {
        content: form.value.content,
        session : sessionStorage.getItem('key'),
        
      })
      .toPromise()
      .then((r: { content: string; session: string  }) => {
        console.log(r);
        
       
      })
      .catch(e => console.log(e));
      
  }

  onExitButtonClick(): void{
    this._router.navigate(['landing'])
  }



}
