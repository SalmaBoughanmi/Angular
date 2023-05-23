import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitRhRoutingModule } from './trait-rh-routing.module';
import { TraitRhComponent } from './trait-rh/trait-rh.component';


@NgModule({
  declarations: [
    TraitRhComponent
  ],
  imports: [
    CommonModule,
    TraitRhRoutingModule
  ]
})
export class TraitRhModule { }
