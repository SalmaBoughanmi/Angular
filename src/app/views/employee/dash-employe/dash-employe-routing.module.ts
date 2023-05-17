import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashEmployeComponent } from './dash-employe/dash-employe.component';

const routes: Routes = [
  {path:'',component:DashEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashEmployeRoutingModule { }
