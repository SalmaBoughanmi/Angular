import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashRhComponent } from './dash-rh/dash-rh.component';

const routes: Routes = [
  {path:'',component:DashRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRhRoutingModule { }
