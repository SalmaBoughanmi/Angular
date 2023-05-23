import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitDsComponent } from './trait-ds/trait-ds.component';

const routes: Routes = [
  {path:'',component:TraitDsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitDsRoutingModule { }
