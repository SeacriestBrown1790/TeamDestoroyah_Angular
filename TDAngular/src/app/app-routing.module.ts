import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { LandingComponent } from './landing/landing.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

{path: '', pathMatch: 'full', redirectTo: 'landing'}, 

{ path: 'wall', component: WallComponent},

{ path: 'login', component: LoggedinComponent},

{ path: 'register', component: RegisterComponent},

{path: 'landing', component: LandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ WallComponent ]