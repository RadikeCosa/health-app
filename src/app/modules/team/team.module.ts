import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDashComponent } from './team-dash/team-dash.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MaterialDashComponent } from './material-dash/material-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

const TeamModuleComponents = [TeamDashComponent, ReportFormComponent];

@NgModule({
  declarations: [TeamModuleComponents, MaterialDashComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  exports: [],
})
export class TeamModule {}
