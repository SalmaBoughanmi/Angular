import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemTraitDsComponent } from './dem-trait-ds/dem-trait-ds.component';

const routes: Routes = [
  {path:'',component:DemTraitDsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemTraitDsRoutingModule { }
