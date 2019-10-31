import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { LandingComponent } from './landing/landing.component';
import { LoggedinComponent } from './loggedin/loggedin.component';


const routes: Routes = [

{ path: 'wall', component: WallComponent},

{ path: 'login', component: LoggedinComponent},

{path: 'landing', component: LandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ WallComponent ]