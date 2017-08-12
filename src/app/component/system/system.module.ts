import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from 'angular2-datatable';
import { TreeModule } from 'angular-tree-component';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { JobStatusComponent } from './job-status/job-status.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SystemRoutes } from './system.routes';
import { SystemComponent } from './system.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(SystemRoutes),
        [MaterialModule.forRoot(),FlexLayoutModule],
        ChartsModule,
        DataTableModule,
        TreeModule
        ],
    declarations: [SystemComponent,SystemStatusComponent,JobStatusComponent,FileExplorerComponent],
    entryComponents: [
        
    ],
    exports: [SystemComponent],
    providers: [
    ]
})

export class SystemModule {
}
