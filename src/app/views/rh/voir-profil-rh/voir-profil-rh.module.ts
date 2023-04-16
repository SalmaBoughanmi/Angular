import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoirProfilRhRoutingModule } from './voir-profil-rh-routing.module';
import { VoirProfilRhComponent } from './voir-profil-rh/voir-profil-rh.component';


@NgModule({
  declarations: [
    VoirProfilRhComponent
  ],
  imports: [
    CommonModule,
    VoirProfilRhRoutingModule
  ]
})
export class VoirProfilRhModule { }
