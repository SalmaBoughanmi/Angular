import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditemployeeRoutingModule } from './editemployee-routing.module';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditemployeeComponent
  ],
  imports: [
    CommonModule,
    EditemployeeRoutingModule,
    FormsModule
  ]
})
export class EditemployeeModule { }
