import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesDemComponent } from './mes-dem/mes-dem.component';

const routes: Routes = [
  {path:':id',component:MesDemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDemRoutingModule { }
