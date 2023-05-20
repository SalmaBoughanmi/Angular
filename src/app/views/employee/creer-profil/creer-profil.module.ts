import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerProfilRoutingModule } from './creer-profil-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutProfilComponent } from './ajout-profil/ajout-profil.component';



@NgModule({
  declarations: [
    AjoutProfilComponent
  ],
  imports: [
    CommonModule,
    CreerProfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreerProfilModule { }
