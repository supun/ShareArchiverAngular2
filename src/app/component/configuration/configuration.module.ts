import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutes } from './configuration.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(ConfigurationRoutes)
        ],
    declarations: [ConfigurationComponent],
    entryComponents: [
        
    ],
    exports: [ConfigurationComponent],
    providers: [
    ]
})

export class ConfigurationModule {
}
