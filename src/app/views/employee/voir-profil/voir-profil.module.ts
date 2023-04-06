import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoirProfilRoutingModule } from './voir-profil-routing.module';
import { VoirProfilComponent } from './voir-profil/voir-profil.component';


@NgModule({
  declarations: [
    VoirProfilComponent
  ],
  imports: [
    CommonModule,
    VoirProfilRoutingModule
  ]
})
export class VoirProfilModule { }
