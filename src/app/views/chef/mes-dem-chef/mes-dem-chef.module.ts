import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDemChefRoutingModule } from './mes-dem-chef-routing.module';
import { MesDemChefComponent } from './mes-dem-chef/mes-dem-chef.component';


@NgModule({
  declarations: [
    MesDemChefComponent
  ],
  imports: [
    CommonModule,
    MesDemChefRoutingModule
  ]
})
export class MesDemChefModule { }
