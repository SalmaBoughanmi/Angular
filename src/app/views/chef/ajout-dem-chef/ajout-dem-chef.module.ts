import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemChefRoutingModule } from './ajout-dem-chef-routing.module';
import { AjoutDemChefComponent } from './ajout-dem-chef/ajout-dem-chef.component';


@NgModule({
  declarations: [
    AjoutDemChefComponent
  ],
  imports: [
    CommonModule,
    AjoutDemChefRoutingModule
  ]
})
export class AjoutDemChefModule { }
