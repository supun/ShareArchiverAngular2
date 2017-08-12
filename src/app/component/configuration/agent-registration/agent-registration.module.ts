import { AgentRegistrationRoutes } from './agent-registration.route';
import { AgentRegistrationComponent } from './agent-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(AgentRegistrationRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [AgentRegistrationComponent],
    entryComponents: [
        
    ],
    exports: [AgentRegistrationComponent],
    providers: [
    ]
})

export class AgentRegistrationModule {
}
