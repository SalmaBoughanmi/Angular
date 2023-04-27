import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemTraitDsRoutingModule } from './dem-trait-ds-routing.module';
import { DemTraitDsComponent } from './dem-trait-ds/dem-trait-ds.component';


@NgModule({
  declarations: [
    DemTraitDsComponent
  ],
  imports: [
    CommonModule,
    DemTraitDsRoutingModule
  ]
})
export class DemTraitDsModule { }
