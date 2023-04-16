import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutOffreRhComponent } from './ajout-offre-rh/ajout-offre-rh.component';

const routes: Routes = [
  {path:'',component:AjoutOffreRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutOffreRhRoutingModule { }
