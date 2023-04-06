import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProfilComponent } from './creer-profil/creer-profil.component';

const routes: Routes = [
  {path:'',component:CreerProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreerProfilRoutingModule { }
