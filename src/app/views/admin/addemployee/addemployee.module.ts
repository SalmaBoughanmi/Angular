import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddemployeeRoutingModule } from './addemployee-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';


@NgModule({
  declarations: [
    AddemployeeComponent
  ],
  imports: [
    CommonModule,
    AddemployeeRoutingModule
  ]
})
export class AddemployeeModule { }
