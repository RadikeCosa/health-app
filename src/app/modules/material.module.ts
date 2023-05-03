import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  declarations: [],
})
export class MaterialModule {}
