import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { OffresComponent } from './offres/offres.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffresComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OffresModule { }
