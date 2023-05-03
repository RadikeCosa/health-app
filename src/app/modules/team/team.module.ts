import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDashComponent } from './team-dash/team-dash.component';

const TeamModuleComponents = [TeamDashComponent];

@NgModule({
  declarations: [TeamModuleComponents],
  imports: [CommonModule],
  exports: [TeamModuleComponents],
})
export class TeamModule {}
