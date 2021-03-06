import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // Data
  appVersion: string = '1.0.0'

  // Image
  imgLogo = 'assets/img/logo/logo_main.png'

  // Subscriber
  subscription: Subscription

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {

  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
