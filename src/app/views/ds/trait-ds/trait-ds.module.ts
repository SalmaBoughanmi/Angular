import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitDsRoutingModule } from './trait-ds-routing.module';
import { TraitDsComponent } from './trait-ds/trait-ds.component';


@NgModule({
  declarations: [
    TraitDsComponent
  ],
  imports: [
    CommonModule,
    TraitDsRoutingModule
  ]
})
export class TraitDsModule { }
