import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { SystemComponent } from './system.component';
import { SystemStatusComponent } from './system-status/system-status.component';

import { Component } from '@angular/core';
export const SystemRoutes = [
  {
    path: '',
    component: SystemComponent
  },
  { 
        path: 'system-status',
        children: [
          {
            path: '',
            component:SystemStatusComponent
          }
        ]
  },
  { 
        path: 'job-status',
        children: [
          {
            path: '',
             component:JobStatusComponent
          }
        ]
  }
  ,{ 
        path: 'file-explorer',
        children: [
          {
            path: '',
             component:FileExplorerComponent
          }
        ]
  }
];
