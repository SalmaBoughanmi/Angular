import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemOffreChefComponent } from './ajout-dem-offre-chef/ajout-dem-offre-chef.component';

const routes: Routes = [
  {path:'',component:AjoutDemOffreChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutDemOffreChefRoutingModule { }
