import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CompanyManagementComponent } from './configuration/company-management/company-management.component';
import { AgentManagementComponent } from './configuration/agent-management/agent-management.component';
import { JobStatusComponent } from './system/job-status/job-status.component';
import { RepositoryStatusComponent } from './system/repository-status/repository-status.component';
import { JobManagementComponent } from './configuration/job-management/job-management.component';
import { SystemStatusComponent } from './system/system-status/system-status.component';
import { GlobalConfigurationComponent } from './system-configuration/global-configuration/global-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    ConfigurationComponent,
    CompanyManagementComponent,
    AgentManagementComponent,
    JobStatusComponent,
    RepositoryStatusComponent,
    JobManagementComponent,
    SystemStatusComponent,
    GlobalConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    [MaterialModule.forRoot(),FlexLayoutModule],
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
