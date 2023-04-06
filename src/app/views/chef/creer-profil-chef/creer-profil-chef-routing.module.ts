import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProfilChefComponent } from './creer-profil-chef/creer-profil-chef.component';

const routes: Routes = [
  {path:'',component:CreerProfilChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreerProfilChefRoutingModule { }
