import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AllemployeesRoutingModule } from './allemployees-routing.module';
import { AllemployeesComponent } from './allemployees/allemployees.component';



@NgModule({
  declarations: [
    AllemployeesComponent
  ],
  imports: [
    CommonModule,
    AllemployeesRoutingModule,
    DataTablesModule,
    MatDialogModule
  ],
  providers:
  [{
    provide: 'allemployees',
    useValue: AllemployeesComponent,
},
      {provide:MatDialogRef , useValue:{} },

      { provide: MAT_DIALOG_DATA, useValue: {} }

],
})
export class AllemployeesModule { }
