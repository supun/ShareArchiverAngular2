import { ConfigurationModule } from './../component/configuration/configuration.module';
import { NavbarComponent } from './../navbar/navbar.component';
import { ToolbarComponent } from './../toolbar/toolbar.component';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(homeRoutes),
        [MaterialModule.forRoot(),FlexLayoutModule]  ],
    declarations: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,],
    entryComponents: [
        
    ],
    exports: [HomeComponent],
    providers: [
    ]
})

export class HomeModule {
}
