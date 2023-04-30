import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerProfilRoutingModule } from './creer-profil-routing.module';
import { CreerProfilComponent } from './creer-profil/creer-profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreerProfilComponent
  ],
  imports: [
    CommonModule,
    CreerProfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreerProfilModule { }
