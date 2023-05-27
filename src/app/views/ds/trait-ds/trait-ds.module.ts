import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitDsRoutingModule } from './trait-ds-routing.module';
import { TraitDsComponent } from './trait-ds/trait-ds.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TraitDsComponent
  ],
  imports: [
    CommonModule,
    TraitDsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TraitDsModule { }
