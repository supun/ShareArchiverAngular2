import { CompanyManagementRoutes } from './company-management.route';
import { CompanyManagementComponent } from './company-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(CompanyManagementRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [CompanyManagementComponent],
    entryComponents: [
        
    ],
    exports: [CompanyManagementComponent],
    providers: [
    ]
})

export class CompanyManagementModule {
}
