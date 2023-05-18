import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashChefComponent } from './dash-chef/dash-chef.component';

const routes: Routes = [
  {path:'',component:DashChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashChefRoutingModule { }
