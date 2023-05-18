import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRhRoutingModule } from './dash-rh-routing.module';
import { DashRhComponent } from './dash-rh/dash-rh.component';


@NgModule({
  declarations: [
    DashRhComponent
  ],
  imports: [
    CommonModule,
    DashRhRoutingModule
  ]
})
export class DashRhModule { }
