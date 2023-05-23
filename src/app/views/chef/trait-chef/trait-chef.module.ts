import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitChefRoutingModule } from './trait-chef-routing.module';
import { TraitChefComponent } from './trait-chef/trait-chef.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TraitChefComponent
  ],
  imports: [
    CommonModule,
    TraitChefRoutingModule,
    ReactiveFormsModule
  ]
})
export class TraitChefModule { }
