import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifRhComponent } from './notif-rh/notif-rh.component';

const routes: Routes = [
  {path:'',component:NotifRhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifRhRoutingModule { }
