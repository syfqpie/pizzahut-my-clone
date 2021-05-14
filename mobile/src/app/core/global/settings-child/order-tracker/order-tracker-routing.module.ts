import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTrackerPage } from './order-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: OrderTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTrackerPageRoutingModule {}
