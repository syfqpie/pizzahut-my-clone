import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/system-layout/system-layout.module').then(m => m.SystemLayoutPageModule)
  },
  {
    path: 'settings',
    children: [
      {
        path: 'account',
        loadChildren: () => import('./core/global/settings-child/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'order-tracker',
        loadChildren: () => import('./core/global/settings-child/order-tracker/order-tracker.module').then(m => m.OrderTrackerPageModule)
      },
      {
        path: 'coupons',
        loadChildren: () => import('./core/global/settings-child/coupons/coupons.module').then(m => m.CouponsPageModule)
      },
      {
        path: 'vouchers',
        loadChildren: () => import('./core/global/settings-child/vouchers/vouchers.module').then(m => m.VouchersPageModule)
      },
      {
        path: 'rewards',
        loadChildren: () => import('./core/global/settings-child/rewards/rewards.module').then(m => m.RewardsPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./core/global/settings-child/faq/faq.module').then(m => m.FaqPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./core/global/settings-child/contact/contact.module').then(m => m.ContactPageModule)
      },
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./core/user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./core/user/menu/menu.module').then( m => m.MenuPageModule)
  }
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./core/global/settings-child/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./core/global/settings-child/account/account.module').then( m => m.AccountPageModule)
  // },
  // {
  //   path: 'order-tracker',
  //   loadChildren: () => import('./core/global/settings-child/order-tracker/order-tracker.module').then( m => m.OrderTrackerPageModule)
  // },
  // {
  //   path: 'coupons',
  //   loadChildren: () => import('./core/global/settings-child/coupons/coupons.module').then( m => m.CouponsPageModule)
  // },
  // {
  //   path: 'vouchers',
  //   loadChildren: () => import('./core/global/settings-child/vouchers/vouchers.module').then( m => m.VouchersPageModule)
  // },
  // {
  //   path: 'rewards',
  //   loadChildren: () => import('./core/global/settings-child/rewards/rewards.module').then( m => m.RewardsPageModule)
  // },
  // {
  //   path: 'faq',
  //   loadChildren: () => import('./core/global/settings-child/faq/faq.module').then( m => m.FaqPageModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./core/global/settings-child/contact/contact.module').then( m => m.ContactPageModule)
  // },
  // {
  //   path: 'system-layout',
  //   loadChildren: () => import('./layouts/system-layout/system-layout.module').then( m => m.SystemLayoutPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
