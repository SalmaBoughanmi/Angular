import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifChefComponent } from './notif-chef/notif-chef.component';

const routes: Routes = [
  {path:'',component:NotifChefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifChefRoutingModule { }
