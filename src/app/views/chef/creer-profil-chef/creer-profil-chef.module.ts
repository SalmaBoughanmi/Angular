import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerProfilChefRoutingModule } from './creer-profil-chef-routing.module';
import { CreerProfilChefComponent } from './creer-profil-chef/creer-profil-chef.component';


@NgModule({
  declarations: [
    CreerProfilChefComponent
  ],
  imports: [
    CommonModule,
    CreerProfilChefRoutingModule
  ]
})
export class CreerProfilChefModule { }
