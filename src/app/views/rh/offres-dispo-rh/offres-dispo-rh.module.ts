import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresDispoRhRoutingModule } from './offres-dispo-rh-routing.module';
import { OffresDispoRhComponent } from './offres-dispo-rh/offres-dispo-rh.component';


@NgModule({
  declarations: [
    OffresDispoRhComponent
  ],
  imports: [
    CommonModule,
    OffresDispoRhRoutingModule
  ]
})
export class OffresDispoRhModule { }
