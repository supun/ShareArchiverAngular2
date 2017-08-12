import { PolicyManagementRoutes } from './policy-management.route';
import { PolicyManagementComponent } from './policy-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(PolicyManagementRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [PolicyManagementComponent],
    entryComponents: [
        
    ],
    exports: [PolicyManagementComponent],
    providers: [
    ]
})

export class PolicyManagementModule {
}
