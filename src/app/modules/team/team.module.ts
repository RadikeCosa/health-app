import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDashComponent } from './team-dash/team-dash.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const TeamModuleComponents = [TeamDashComponent, ReportFormComponent];

@NgModule({
  declarations: [TeamModuleComponents],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [],
})
export class TeamModule {}
