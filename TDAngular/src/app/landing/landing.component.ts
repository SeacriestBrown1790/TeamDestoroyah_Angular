import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  onLandingButtonClick(): void{
    this._router.navigate(['login'])
  }

  
}

var imageUrlArray = ["https://i.pinimg.com/originals/fd/ae/2e/fdae2ed49d63b14fddbebf30b3cc3eaa.png"]; 





