import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { ChefLayoutComponent } from './chef-layout/chef-layout.component';
import { RhLayoutComponent } from './rh-layout/rh-layout.component';
import { DsLayoutComponent } from './ds-layout/ds-layout.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    EmployeeLayoutComponent,
    ChefLayoutComponent,
    RhLayoutComponent,
    DsLayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
