import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const SharedCompontents = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  PageNotFoundComponent,
];
@NgModule({
  declarations: [SharedCompontents],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SharedCompontents],
})
export class SharedModule {}
