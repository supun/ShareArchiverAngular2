import { ConfigurationComponent } from './configuration.component';

import { Component } from '@angular/core';
export const ConfigurationRoutes = [
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  { 
        path: 'agent-list',
        children: [
          {
            path: '',
            loadChildren: './agent-management/agent-management.module#AgentManagementModule'
          }
        ]
  },
  { 
        path: 'agent-registration',
        children: [
          {
            path: '',
            loadChildren: './agent-registration/agent-registration.module#AgentRegistrationModule'
          }
        ]
    },
    {
        path:'company-list',
        children: [
        {
            path: '',
                loadChildren: './company-management/company-management.module#CompanyManagementModule'
        }
        ]
    },
    {
        path:'job-list',
        children: [
        {
            path: '',
                loadChildren: './job-management/job-management.module#JobManagementModule'
        }
        ]
    },
    {
        path:'policy-management',
        children: [
        {
            path: '',
                loadChildren: './policy-management/policy-management.module#PolicyManagementModule'
        }
        ]
    },
    {
              path:'shared-folder',
              children: [
        {
               path: '',
                loadChildren: './shared-folder/shared-folder.module#SharedFolderModule'
        }
        ]
    },
    {
              path:'volume-management',
             children: [
        {
               path: '',
                loadChildren: './volume-management/volume-management.module#VolumeManagementModule'
        }
        ]
    },
];
