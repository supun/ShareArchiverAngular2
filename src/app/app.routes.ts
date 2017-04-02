import { JobStatusComponent } from './job-status/job-status.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '', 
    redirectTo:'configuration',
    pathMatch: 'full'
   },
   {
    path:'configuration',
    children: [
            {
               path: '',
               redirectTo:'company-list',
               pathMatch: 'full'
            },
            {
              path:'company-list',
              component: CompanyManagementComponent
            },
            {
              path:'agent-list',
              component:AgentManagementComponent
            }
    ]
   },
   {
      path:'system',
      children:[
          {
            path:'job-status',
            component:JobStatusComponent
          }
      ]
     
   },
   {
     path:'main',
     component:MainComponent
   }
];
