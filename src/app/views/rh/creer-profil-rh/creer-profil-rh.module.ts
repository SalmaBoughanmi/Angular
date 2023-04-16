import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerProfilRhRoutingModule } from './creer-profil-rh-routing.module';
import { CreerProfilRhComponent } from './creer-profil-rh/creer-profil-rh.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreerProfilRhComponent
  ],
  imports: [
    CommonModule,
    CreerProfilRhRoutingModule,
    FormsModule
  ]
})
export class CreerProfilRhModule { }
