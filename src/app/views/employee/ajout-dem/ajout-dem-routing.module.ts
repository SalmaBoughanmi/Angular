import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemComponent } from './ajout-dem/ajout-dem.component';

const routes: Routes = [
  {path:'',component:AjoutDemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutDemRoutingModule { }
