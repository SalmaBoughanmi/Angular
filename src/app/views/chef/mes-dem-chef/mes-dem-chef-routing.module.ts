import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesDemChefComponent } from './mes-dem-chef/mes-dem-chef.component';

const routes: Routes = [
  {path:'',component:MesDemChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDemChefRoutingModule { }
