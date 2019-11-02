import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { AuthorizationComponent } from './authorization/authorization.component';
import { ProfileComponent } from './profile/profile.component';
=======
import { LandingComponent } from './landing/landing.component';
import { SlideshowModule} from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';




>>>>>>> aabe08268373fa9aa31cb4e0815ddc5cfc1309c8

@NgModule({
 
  declarations: [
    
    AppComponent,
    LoggedinComponent,
    NavbarComponent,
    RegisterComponent,
<<<<<<< HEAD
    AuthorizationComponent,
    ProfileComponent
=======
    routingComponents,
    LandingComponent,

    
>>>>>>> aabe08268373fa9aa31cb4e0815ddc5cfc1309c8
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
