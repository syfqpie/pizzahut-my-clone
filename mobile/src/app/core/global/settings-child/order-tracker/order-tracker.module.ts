import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTrackerPageRoutingModule } from './order-tracker-routing.module';

import { OrderTrackerPage } from './order-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderTrackerPageRoutingModule
  ],
  declarations: [OrderTrackerPage]
})
export class OrderTrackerPageModule {}
