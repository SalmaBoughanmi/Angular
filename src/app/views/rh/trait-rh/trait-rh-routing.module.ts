import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitRhComponent } from './trait-rh/trait-rh.component';

const routes: Routes = [
  {path:'',component:TraitRhComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitRhRoutingModule { }
