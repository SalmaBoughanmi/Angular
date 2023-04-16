import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresDispoRhComponent } from './offres-dispo-rh/offres-dispo-rh.component';

const routes: Routes = [
  {path:'',component:OffresDispoRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresDispoRhRoutingModule { }
