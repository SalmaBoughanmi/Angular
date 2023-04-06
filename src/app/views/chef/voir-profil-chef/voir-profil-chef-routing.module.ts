import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoirProfilChefComponent } from './voir-profil-chef/voir-profil-chef.component';

const routes: Routes = [
  {path:'',component:VoirProfilChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoirProfilChefRoutingModule { }
