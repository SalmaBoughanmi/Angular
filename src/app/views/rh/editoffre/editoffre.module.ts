import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoffreRoutingModule } from './editoffre-routing.module';
import { EditoffreComponent } from './editoffre/editoffre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditoffreComponent
  ],
  imports: [
    CommonModule,
    EditoffreRoutingModule,
    FormsModule
  ]
})
export class EditoffreModule { }
