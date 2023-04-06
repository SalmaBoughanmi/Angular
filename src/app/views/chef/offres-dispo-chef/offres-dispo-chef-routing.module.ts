import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresDispoChefComponent } from './offres-dispo-chef/offres-dispo-chef.component';

const routes: Routes = [
  {path:'',component:OffresDispoChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresDispoChefRoutingModule { }
