import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemTraitRhComponent } from './dem-trait-rh/dem-trait-rh.component';

const routes: Routes = [
  {path:'',component:DemTraitRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemTraitRhRoutingModule { }
