import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemTraitRhRoutingModule } from './dem-trait-rh-routing.module';
import { DemTraitRhComponent } from './dem-trait-rh/dem-trait-rh.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DemTraitRhComponent
  ],
  imports: [
    CommonModule,
    DemTraitRhRoutingModule,
    DataTablesModule,
  ]
})
export class DemTraitRhModule { }
