import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashEmployeRoutingModule } from './dash-employe-routing.module';
import { DashEmployeComponent } from './dash-employe/dash-employe.component';


@NgModule({
  declarations: [
    DashEmployeComponent
  ],
  imports: [
    CommonModule,
    DashEmployeRoutingModule
  ]
})
export class DashEmployeModule { }
