import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemTraitRhRoutingModule } from './dem-trait-rh-routing.module';
import { DemTraitRhComponent } from './dem-trait-rh/dem-trait-rh.component';


@NgModule({
  declarations: [
    DemTraitRhComponent
  ],
  imports: [
    CommonModule,
    DemTraitRhRoutingModule
  ]
})
export class DemTraitRhModule { }
