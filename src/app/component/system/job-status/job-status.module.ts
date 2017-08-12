import { JobStatusComponent } from './job-status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from "angular2-datatable";
import { TreeModule } from 'angular-tree-component';
import { JobStatusRoutes } from './job-status.routes';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(JobStatusRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule],
        ChartsModule,
        DataTableModule,
        TreeModule
        ],
    declarations: [JobStatusComponent],
    entryComponents: [
        
    ],
    exports: [JobStatusComponent],
    providers: [
    ]
})

export class JobStatusModule {
}
