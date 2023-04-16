import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoirProfilRhComponent } from './voir-profil-rh/voir-profil-rh.component';

const routes: Routes = [
  {path:'',component:VoirProfilRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoirProfilRhRoutingModule { }
