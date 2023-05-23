import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitChefComponent } from './trait-chef/trait-chef.component';

const routes: Routes = [
  {path:'',component:TraitChefComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitChefRoutingModule { }
