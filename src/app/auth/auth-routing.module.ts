import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

// TODO: import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent },
    // TODO: { path: 'reset', component: ResetPasswordComponent }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
