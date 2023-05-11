import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresDispoRoutingModule } from './offres-dispo-routing.module';
import { OffresDispoComponent } from './offres-dispo/offres-dispo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffresDispoComponent
  ],
  imports: [
    CommonModule,
    OffresDispoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OffresDispoModule { }
