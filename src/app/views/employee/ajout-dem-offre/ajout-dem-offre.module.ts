import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemOffreRoutingModule } from './ajout-dem-offre-routing.module';
import { AjoutDemOffreComponent } from './ajout-dem-offre/ajout-dem-offre.component';


@NgModule({
  declarations: [
    AjoutDemOffreComponent
  ],
  imports: [
    CommonModule,
    AjoutDemOffreRoutingModule
  ]
})
export class AjoutDemOffreModule { }
