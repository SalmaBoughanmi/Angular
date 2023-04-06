import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoirProfilChefRoutingModule } from './voir-profil-chef-routing.module';
import { VoirProfilChefComponent } from './voir-profil-chef/voir-profil-chef.component';


@NgModule({
  declarations: [
    VoirProfilChefComponent
  ],
  imports: [
    CommonModule,
    VoirProfilChefRoutingModule
  ]
})
export class VoirProfilChefModule { }
