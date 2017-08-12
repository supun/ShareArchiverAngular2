import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AgentRegistrationComponent } from './component/configuration/agent-registration/agent-registration.component';
import { SharedFolderComponent } from './component/configuration/shared-folder/shared-folder.component';
import { VolumeManagementComponent } from './component/configuration/volume-management/volume-management.component';
import { PolicyManagementComponent } from './component/configuration/policy-management/policy-management.component';
import { FileExplorerComponent } from './component/system/file-explorer/file-explorer.component';
import { GlobalConfigurationComponent } from './component/system-configuration/global-configuration/global-configuration.component';
import { SystemStatusComponent } from './component/system/system-status/system-status.component';
import { JobManagementComponent } from './component/configuration/job-management/job-management.component';
import { RepositoryStatusComponent } from './component/system/repository-status/repository-status.component';
import { Component } from '@angular/core';
import { JobStatusComponent } from './component/system/job-status/job-status.component';
import { CompanyManagementComponent } from './component/configuration/company-management/company-management.component';
import { AgentManagementComponent } from './component/configuration/agent-management/agent-management.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '', 
    redirectTo:'login',
    pathMatch: 'full'
   },
   {
     path:'login',
     component:LoginComponent
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
              component: CompanyManagementComponent,
               canActivate: [AuthGuard],
            },
            {
              path:'agent-list',
              component:AgentManagementComponent
            },
            {
              path:'job-list',
              component:JobManagementComponent
            },
            {
              path:'policy-management',
              component:PolicyManagementComponent
            },
             {
              path:'agent-registration',
              component:AgentRegistrationComponent
            },
            {
              path:'volume-management',
              component:VolumeManagementComponent
            },
            {
              path:'shared-folder',
              component:SharedFolderComponent
            }
           
    ]
   },
   {
      path:'system',
      children:[
           {
               path: '',
               redirectTo:'system-status',
               pathMatch: 'full'
            },
          {
            path:'job-status',
            component:JobStatusComponent
          },
          {
            path:'system-status',
            component:SystemStatusComponent
          },
          {
            path:'file-explorer',
            component:FileExplorerComponent
          }
      ]
     
   },
   {
      path:'system-configuration',
      children:[
           {
               path: '',
               redirectTo:'global-configuration',
               pathMatch: 'full'
            },
          {
            path:'global-configuration',
            component:GlobalConfigurationComponent
          }
      ]
     
   },
   {
     path:'main',
     component:MainComponent
   },
   {
     path:'components',
     component:HomeComponent
   }
];