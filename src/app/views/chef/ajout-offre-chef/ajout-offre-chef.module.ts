import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutOffreChefRoutingModule } from './ajout-offre-chef-routing.module';
import { AjoutOffreChefComponent } from './ajout-offre-chef/ajout-offre-chef.component';


@NgModule({
  declarations: [
    AjoutOffreChefComponent
  ],
  imports: [
    CommonModule,
    AjoutOffreChefRoutingModule
  ]
})
export class AjoutOffreChefModule { }
