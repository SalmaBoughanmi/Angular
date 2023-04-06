import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemTraitChefComponent } from './dem-trait-chef/dem-trait-chef.component';

const routes: Routes = [
  {path:'',component:DemTraitChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemTraitChefRoutingModule { }
