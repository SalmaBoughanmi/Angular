import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AjoutDemOffreRoutingModule } from './ajout-dem-offre-routing.module';
import { AjoutDemOffreComponent } from './ajout-dem-offre/ajout-dem-offre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjoutDemOffreComponent
  ],
  imports: [
    CommonModule,
    AjoutDemOffreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class AjoutDemOffreModule { }
