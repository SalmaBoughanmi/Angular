import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDsRoutingModule } from './dash-ds-routing.module';
import { DashDsComponent } from './dash-ds/dash-ds.component';


@NgModule({
  declarations: [
    DashDsComponent
  ],
  imports: [
    CommonModule,
    DashDsRoutingModule
  ]
})
export class DashDsModule { }
