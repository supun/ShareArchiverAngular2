import { AuthGuardService } from './shared/service/login/auth-guard.service';
/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:24:16 
 * @Last Modified by: Supun Dharmarathne
 * @Last Modified time: 2017-04-06 18:16:15
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from "angular2-datatable";
import { TreeModule } from 'angular-tree-component';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { GlobalConfigurationComponent } from './component/system-configuration/global-configuration/global-configuration.component';
import { CompanyManagementComponent } from './component/configuration/company-management/company-management.component';
import { AgentManagementComponent } from './component/configuration/agent-management/agent-management.component';
import { JobStatusComponent } from './component/system/job-status/job-status.component';
import { RepositoryStatusComponent } from './component/system/repository-status/repository-status.component';
import { JobManagementComponent } from './component/configuration/job-management/job-management.component';
import { SystemStatusComponent } from './component/system/system-status/system-status.component';

import { UserManagementComponent } from './component/user-group/user-management/user-management.component';
import { GroupManagementComponent } from './component/user-group/group-management/group-management.component';
import { AccountPolicyComponent } from './component/user-group/account-policy/account-policy.component';
import { UserCompanyManagementComponent } from './component/user-group/user-company-management/user-company-management.component';
import { FileExplorerComponent } from './component/system/file-explorer/file-explorer.component';
import { PolicyManagementComponent } from './component/configuration/policy-management/policy-management.component';
import { VolumeManagementComponent } from './component/configuration/volume-management/volume-management.component';
import { SharedFolderComponent } from './component/configuration/shared-folder/shared-folder.component';
import { AgentRegistrationComponent } from './component/configuration/agent-registration/agent-registration.component';

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
    FileExplorerComponent,
    PolicyManagementComponent,
    VolumeManagementComponent,
    SharedFolderComponent,
    AgentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    [MaterialModule.forRoot(),FlexLayoutModule],
    ChartsModule,
    DataTableModule,
    TreeModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
