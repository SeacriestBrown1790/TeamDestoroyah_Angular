import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  onLogInButtonClick(): void{
    this._router.navigate(['wall'])
  }

  onRegisterButtonClick(): void{
    this._router.navigate(['register'])
  }

}
