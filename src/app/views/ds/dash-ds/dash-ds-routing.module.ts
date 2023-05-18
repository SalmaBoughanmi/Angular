import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashDsComponent } from './dash-ds/dash-ds.component';

const routes: Routes = [
  {path:'',component:DashDsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDsRoutingModule { }
