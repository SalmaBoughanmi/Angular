import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemRoutingModule } from './ajout-dem-routing.module';
import { AjoutDemComponent } from './ajout-dem/ajout-dem.component';


@NgModule({
  declarations: [
    AjoutDemComponent
  ],
  imports: [
    CommonModule,
    AjoutDemRoutingModule
  ]
})
export class AjoutDemModule { }
