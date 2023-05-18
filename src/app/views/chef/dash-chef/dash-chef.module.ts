import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashChefRoutingModule } from './dash-chef-routing.module';
import { DashChefComponent } from './dash-chef/dash-chef.component';


@NgModule({
  declarations: [
    DashChefComponent
  ],
  imports: [
    CommonModule,
    DashChefRoutingModule
  ]
})
export class DashChefModule { }
