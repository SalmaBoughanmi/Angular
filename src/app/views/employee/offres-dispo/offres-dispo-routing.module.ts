import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresDispoComponent } from './offres-dispo/offres-dispo.component';

const routes: Routes = [
  {path:'',component:OffresDispoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresDispoRoutingModule { }
