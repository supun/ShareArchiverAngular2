import { AgentManagementRoutes } from './agent-management.route';
import { AgentManagementComponent } from './agent-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(AgentManagementRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [AgentManagementComponent],
    entryComponents: [
        
    ],
    exports: [AgentManagementComponent],
    providers: [
    ]
})

export class AgentManagementModule {
}
