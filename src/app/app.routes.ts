import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '', 
    component: MainComponent
   },
   {
     path:'main',
     component:HomeComponent
   }
];
