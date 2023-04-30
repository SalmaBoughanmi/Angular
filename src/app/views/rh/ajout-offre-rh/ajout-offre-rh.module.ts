import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutOffreRhRoutingModule } from './ajout-offre-rh-routing.module';
import { AjoutOffreRhComponent } from './ajout-offre-rh/ajout-offre-rh.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjoutOffreRhComponent
  ],
  imports: [
    CommonModule,
    AjoutOffreRhRoutingModule,
    FormsModule
  ]
})
export class AjoutOffreRhModule { }
