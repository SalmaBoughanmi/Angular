import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerProfilRoutingModule } from './creer-profil-routing.module';
import { CreerProfilComponent } from './creer-profil/creer-profil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreerProfilComponent
  ],
  imports: [
    CommonModule,
    CreerProfilRoutingModule,
    FormsModule
  ]
})
export class CreerProfilModule { }
