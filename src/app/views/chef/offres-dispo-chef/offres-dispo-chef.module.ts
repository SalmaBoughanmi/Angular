import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresDispoChefRoutingModule } from './offres-dispo-chef-routing.module';
import { OffresDispoChefComponent } from './offres-dispo-chef/offres-dispo-chef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffresDispoChefComponent
  ],
  imports: [
    CommonModule,
    OffresDispoChefRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OffresDispoChefModule { }
