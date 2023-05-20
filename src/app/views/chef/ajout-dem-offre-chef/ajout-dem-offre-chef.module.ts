import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemOffreChefRoutingModule } from './ajout-dem-offre-chef-routing.module';
import { AjoutDemOffreChefComponent } from './ajout-dem-offre-chef/ajout-dem-offre-chef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjoutDemOffreChefComponent
  ],
  imports: [
    CommonModule,
    AjoutDemOffreChefRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AjoutDemOffreChefModule { }
