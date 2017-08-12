import { AuthGuard } from './../_guards/auth.guard';
import { AuthenticationService } from './../shared/service/authentication.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

// TODO import { ResetPasswordComponent } from './reset-password/reset-password.component';
// TODO import { EqualValidator } from './shared/equal-validator.directive';
   
   
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [MaterialModule.forRoot(),FlexLayoutModule],
    AuthRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    LoginComponent,
     // TODO ResetPasswordComponent,
    // TODO EqualValidator
  ],
  providers: [AuthenticationService],
})
export class AuthModule {

  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [ AuthGuard ]
    }
  }

}

