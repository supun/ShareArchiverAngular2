import { JobManagementRoutes } from './job-management.route';
import { JobManagementComponent } from './job-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(JobManagementRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [JobManagementComponent],
    entryComponents: [
        
    ],
    exports: [JobManagementComponent],
    providers: [
    ]
})

export class JobManagementModule {
}
