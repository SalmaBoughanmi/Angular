import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditoffreComponent } from './editoffre/editoffre.component';

const routes: Routes = [
  {path:'',component:EditoffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoffreRoutingModule { }
