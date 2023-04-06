import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifRoutingModule } from './notif-routing.module';
import { NotifComponent } from './notif/notif.component';


@NgModule({
  declarations: [
    NotifComponent
  ],
  imports: [
    CommonModule,
    NotifRoutingModule
  ]
})
export class NotifModule { }
