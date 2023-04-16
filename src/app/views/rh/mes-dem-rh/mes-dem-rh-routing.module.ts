import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesDemRhComponent } from './mes-dem-rh/mes-dem-rh.component';

const routes: Routes = [
  {path:'',component:MesDemRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDemRhRoutingModule { }
