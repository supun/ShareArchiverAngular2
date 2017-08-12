import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './../_guards/auth.guard';

export const homeRoutes: Routes = [
  {
     path:'',
     component:HomeComponent,
     children: [
        {
         path:'configuration',
         loadChildren: './component/configuration/configuration.module#ConfigurationModule'
        },
        {
         path:'system',
         loadChildren: './component/system/system.module#SystemModule'
        }
    ]  
  }
];
