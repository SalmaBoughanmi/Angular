import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemRhComponent } from './ajout-dem-rh/ajout-dem-rh.component';

const routes: Routes = [
  {path:'',component:AjoutDemRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutDemRhRoutingModule { }
