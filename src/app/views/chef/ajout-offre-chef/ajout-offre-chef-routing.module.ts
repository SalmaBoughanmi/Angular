import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutOffreChefComponent } from './ajout-offre-chef/ajout-offre-chef.component';

const routes: Routes = [
  {path:'',component:AjoutOffreChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutOffreChefRoutingModule { }
