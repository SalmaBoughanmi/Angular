import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemTraitDsRoutingModule } from './dem-trait-ds-routing.module';
import { DemTraitDsComponent } from './dem-trait-ds/dem-trait-ds.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DemTraitDsComponent
  ],
  imports: [
    CommonModule,
    DemTraitDsRoutingModule,
    DataTablesModule,
  ]
})
export class DemTraitDsModule { }
