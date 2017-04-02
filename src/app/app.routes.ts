import { SystemStatusComponent } from './system/system-status/system-status.component';
import { JobManagementComponent } from './configuration/job-management/job-management.component';
import { RepositoryStatusComponent } from './system/repository-status/repository-status.component';
import { Component } from '@angular/core';
import { JobStatusComponent } from './system/job-status/job-status.component';
import { CompanyManagementComponent } from './configuration/company-management/company-management.component';
import { AgentManagementComponent } from './configuration/agent-management/agent-management.component';
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
            },
            {
              path:'job-list',
              component:JobManagementComponent
            }
    ]
   },
   {
      path:'system',
      children:[
           {
               path: '',
               redirectTo:'job-status',
               pathMatch: 'full'
            },
          {
            path:'job-status',
            component:JobStatusComponent
          },
          {
            path:'system-status',
            component:SystemStatusComponent
          }
      ]
     
   },
   {
     path:'main',
     component:MainComponent
   }
];
