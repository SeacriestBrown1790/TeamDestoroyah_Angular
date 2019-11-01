import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
 
  declarations: [
    
    AppComponent,
    LoggedinComponent,
    NavbarComponent,
    RegisterComponent,
    routingComponents,
    LandingComponent,

    
  ],
  imports: [
    
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
