import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemChefComponent } from './ajout-dem-chef/ajout-dem-chef.component';

const routes: Routes = [
  {path:'',component:AjoutDemChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutDemChefRoutingModule { }
