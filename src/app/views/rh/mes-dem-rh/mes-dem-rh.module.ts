import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDemRhRoutingModule } from './mes-dem-rh-routing.module';
import { MesDemRhComponent } from './mes-dem-rh/mes-dem-rh.component';


@NgModule({
  declarations: [
    MesDemRhComponent
  ],
  imports: [
    CommonModule,
    MesDemRhRoutingModule
  ]
})
export class MesDemRhModule { }
