import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifRhRoutingModule } from './notif-rh-routing.module';
import { NotifRhComponent } from './notif-rh/notif-rh.component';


@NgModule({
  declarations: [
    NotifRhComponent
  ],
  imports: [
    CommonModule,
    NotifRhRoutingModule
  ]
})
export class NotifRhModule { }
