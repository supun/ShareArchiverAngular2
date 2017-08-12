import { VolumeManagementComponent } from './volume-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VolumeManagementRoutes } from "./volume-management.route";
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(VolumeManagementRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [VolumeManagementComponent],
    entryComponents: [
        
    ],
    exports: [VolumeManagementComponent],
    providers: [
    ]
})

export class  VolumeManagementModule {
}
