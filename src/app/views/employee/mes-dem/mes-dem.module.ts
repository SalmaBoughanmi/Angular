import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDemRoutingModule } from './mes-dem-routing.module';
import { MesDemComponent } from './mes-dem/mes-dem.component';


@NgModule({
  declarations: [
    MesDemComponent
  ],
  imports: [
    CommonModule,
    MesDemRoutingModule
  ]
})
export class MesDemModule { }
