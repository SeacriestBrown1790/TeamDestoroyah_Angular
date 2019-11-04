import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { SlideshowModule} from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackgrounduploadComponent } from './backgroundupload/backgroundupload.component';
import { PostpicuploadComponent } from './postpicupload/postpicupload.component';
import { ProfilepicuploadComponent } from './profilepicupload/profilepicupload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { YoutubepostComponent } from './youtubepost/youtubepost.component';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { UploadFileService } from './upload/upload-file.service';




@NgModule({
 
  declarations: [
    
    AppComponent,
    LoggedinComponent,
    NavbarComponent,
    RegisterComponent,
    routingComponents,
    LandingComponent,
    BackgrounduploadComponent,
    PostpicuploadComponent,
    ProfilepicuploadComponent,
    YoutubepostComponent,

    
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
    YoutubePlayerModule,
    NgxY2PlayerModule,
  ],
  providers: [
    AuthService,
    UploadFileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);