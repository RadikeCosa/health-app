import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamListComponent } from './team-list/team-list.component';

const AdminComponents = [
  PatientListComponent,
  PatientFormComponent,
  AdminDashComponent,
  TeamFormComponent,
  TeamListComponent,
];

@NgModule({
  declarations: [AdminComponents],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [],
})
export class AdminModule {}
