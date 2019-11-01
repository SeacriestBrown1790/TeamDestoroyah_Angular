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
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';





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
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
