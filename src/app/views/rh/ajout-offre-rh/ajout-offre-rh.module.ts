import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutOffreRhRoutingModule } from './ajout-offre-rh-routing.module';
import { AjoutOffreRhComponent } from './ajout-offre-rh/ajout-offre-rh.component';


@NgModule({
  declarations: [
    AjoutOffreRhComponent
  ],
  imports: [
    CommonModule,
    AjoutOffreRhRoutingModule
  ]
})
export class AjoutOffreRhModule { }
