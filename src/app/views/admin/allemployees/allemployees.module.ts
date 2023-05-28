// import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AllemployeesRoutingModule } from './allemployees-routing.module';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllemployeesComponent
  ],
  imports: [
    CommonModule,
    AllemployeesRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // DataTablesModule,
    // MatDialogModule
  ]

})
export class AllemployeesModule { }
