import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProfilRhComponent } from './creer-profil-rh/creer-profil-rh.component';

const routes: Routes = [
  {path:'',component:CreerProfilRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreerProfilRhRoutingModule { }
