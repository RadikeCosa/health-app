import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './modules/admin/admin-dash/admin-dash.component';
import { HomeComponent } from './modules/shared/home/home.component';
import { TeamDashComponent } from './modules/team/team-dash/team-dash.component';
import { PatientDashComponent } from './modules/patient/patient-dash/patient-dash.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminDashComponent,
  },
  {
    path: 'team',
    component: TeamDashComponent,
  },
  {
    path: 'patient',
    component: PatientDashComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
