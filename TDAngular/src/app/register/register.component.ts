import { Component, OnInit, Renderer2  } from '@angular/core';
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
              private _router: Router,
              private renderer: Renderer2,
              ) { }

  ngOnInit() {
  }


  

  submission(form: NgForm) {
    
     

    this.http
      .post("http://localhost:8080/TeamDestoroyah/users/putIn.app", {
        username: form.value.username,
        userpass: form.value.userpass,
        age: form.value.age,
        gender: form.value.gender,
        birthday: form.value.birthday,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email 
      })
      .toPromise()
      .then((r: { username: string; userpass: string;age: number; gender: string; birthday: Date; firstname: string;lastname: string;email: string }) => {
        console.log(r);
        // sessionStorage.setItem("username", JSON.stringify(r));
        this.onRegisterButtonClick();
      })
      .catch(e => console.log(e));
      
      
  }

  onClickPhoto(): void{
    var x = document.getElementById("Post");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

 

  onRegisterButtonClick(): void{
    this._router.navigate(['login'])
  }

  changeColor(): void{
  var el = document.getElementById('username');
  el.style.backgroundColor = '#e6fff2';
    }

    changeColor7(): void{
      var el = document.getElementById('exampleInputEmail1');
      el.style.backgroundColor = '#e6fff2';
        }

  changeColor1(): void{
      var el = document.getElementById('firstName');
      el.style.backgroundColor = '#e6fff2';
        }

        changeColor2(): void{
          var el = document.getElementById('lastname');
          el.style.backgroundColor = '#e6fff2';
            }

            changeColor3(): void{
              var el = document.getElementById('exampleInputPassword1');
              el.style.backgroundColor = '#e6fff2';
                }

                changeColor4(): void{
                  var el = document.getElementById('gender');
                  el.style.backgroundColor = '#e6fff2';
                    }

                    changeColor5(): void{
                      var el = document.getElementById('birthday');
                      el.style.backgroundColor = '#e6fff2';
                        }

}
