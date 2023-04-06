import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifChefRoutingModule } from './notif-chef-routing.module';
import { NotifChefComponent } from './notif-chef/notif-chef.component';


@NgModule({
  declarations: [
    NotifChefComponent
  ],
  imports: [
    CommonModule,
    NotifChefRoutingModule
  ]
})
export class NotifChefModule { }
