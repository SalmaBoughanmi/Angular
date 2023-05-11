import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemOffreChefRoutingModule } from './ajout-dem-offre-chef-routing.module';
import { AjoutDemOffreChefComponent } from './ajout-dem-offre-chef/ajout-dem-offre-chef.component';


@NgModule({
  declarations: [
    AjoutDemOffreChefComponent
  ],
  imports: [
    CommonModule,
    AjoutDemOffreChefRoutingModule
  ]
})
export class AjoutDemOffreChefModule { }
