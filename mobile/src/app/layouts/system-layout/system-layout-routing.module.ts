import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemLayoutPage } from './system-layout.page';

const routes: Routes = [
  {
    path: 'user',
    component: SystemLayoutPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../core/user/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../../core/user/menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'coupons',
        loadChildren: () => import('../../core/global/settings-child/coupons/coupons.module').then(m => m.CouponsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../core/global/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/user/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemLayoutPageRoutingModule {}
