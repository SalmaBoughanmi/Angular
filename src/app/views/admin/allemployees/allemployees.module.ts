import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllemployeesRoutingModule } from './allemployees-routing.module';
import { AllemployeesComponent } from './allemployees/allemployees.component';


@NgModule({
  declarations: [
    AllemployeesComponent
  ],
  imports: [
    CommonModule,
    AllemployeesRoutingModule
  ]
})
export class AllemployeesModule { }
