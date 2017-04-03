/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:24:16 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:24:16 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { TreeModule, SharedModule } from 'primeng/primeng';
import {DataTableModule} from "angular2-datatable";
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { GlobalConfigurationComponent } from './system-configuration/global-configuration/global-configuration.component';
import { CompanyManagementComponent } from './configuration/company-management/company-management.component';
import { AgentManagementComponent } from './configuration/agent-management/agent-management.component';
import { JobStatusComponent } from './system/job-status/job-status.component';
import { RepositoryStatusComponent } from './system/repository-status/repository-status.component';
import { JobManagementComponent } from './configuration/job-management/job-management.component';
import { SystemStatusComponent } from './system/system-status/system-status.component';

import { UserManagementComponent } from './user-group/user-management/user-management.component';
import { GroupManagementComponent } from './user-group/group-management/group-management.component';
import { AccountPolicyComponent } from './user-group/account-policy/account-policy.component';
import { UserCompanyManagementComponent } from './user-group/user-company-management/user-company-management.component';
import { FileExplorerComponent } from './system/file-explorer/file-explorer.component';

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
    GlobalConfigurationComponent,
    UserManagementComponent,
    GroupManagementComponent,
    AccountPolicyComponent,
    UserCompanyManagementComponent,
    FileExplorerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    [MaterialModule.forRoot(),FlexLayoutModule],
    ChartsModule,
    TreeModule, 
    SharedModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
