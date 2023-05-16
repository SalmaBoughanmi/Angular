import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemTraitChefComponent, DialogDataExampleDialog } from './dem-trait-chef/dem-trait-chef.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {path:'',component:DemTraitChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatDialogModule ],
  exports: [RouterModule]
})
export class DemTraitChefRoutingModule { }
