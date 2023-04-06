import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresDispoChefRoutingModule } from './offres-dispo-chef-routing.module';
import { OffresDispoChefComponent } from './offres-dispo-chef/offres-dispo-chef.component';


@NgModule({
  declarations: [
    OffresDispoChefComponent
  ],
  imports: [
    CommonModule,
    OffresDispoChefRoutingModule
  ]
})
export class OffresDispoChefModule { }
