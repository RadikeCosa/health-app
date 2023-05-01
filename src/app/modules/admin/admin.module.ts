import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AdminComponent } from 'src/app/views/admin/admin.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientFormComponent } from './patient-form/patient-form.component';

const AdminComponents = [
  PatientListComponent,
  AdminComponent,
  PatientFormComponent,
];

@NgModule({
  declarations: [AdminComponents],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [AdminComponents],
})
export class AdminModule {}
