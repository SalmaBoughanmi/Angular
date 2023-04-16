import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutDemRhRoutingModule } from './ajout-dem-rh-routing.module';
import { AjoutDemRhComponent } from './ajout-dem-rh/ajout-dem-rh.component';


@NgModule({
  declarations: [
    AjoutDemRhComponent
  ],
  imports: [
    CommonModule,
    AjoutDemRhRoutingModule
  ]
})
export class AjoutDemRhModule { }
