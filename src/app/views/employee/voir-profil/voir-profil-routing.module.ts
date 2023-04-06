import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoirProfilComponent } from './voir-profil/voir-profil.component';

const routes: Routes = [
  {path:'',component:VoirProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoirProfilRoutingModule { }
