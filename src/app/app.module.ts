import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CompnayConfigurationComponent } from './compnay-configuration/compnay-configuration.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { JobStatusComponent } from './job-status/job-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    ConfigurationComponent,
    CompnayConfigurationComponent,
    CompanyManagementComponent,
    AgentManagementComponent,
    JobStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    [MaterialModule.forRoot(),FlexLayoutModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
