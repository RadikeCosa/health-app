import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDashComponent } from './patient-dash/patient-dash.component';

const PatientModuleComponents = [PatientDashComponent];

@NgModule({
  declarations: [PatientModuleComponents],
  imports: [CommonModule],
  exports: [PatientModuleComponents],
})
export class PatientModule {}
