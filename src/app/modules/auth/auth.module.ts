import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AuthModuleComponents = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [AuthModuleComponents],
  imports: [CommonModule],
  exports: [AuthModuleComponents],
})
export class AuthModule {}
