import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemTraitChefRoutingModule } from './dem-trait-chef-routing.module';
import { DemTraitChefComponent } from './dem-trait-chef/dem-trait-chef.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DemTraitChefComponent
  ],
  imports: [
    CommonModule,
    DemTraitChefRoutingModule,
    DataTablesModule,
  ]
})
export class DemTraitChefModule { }
