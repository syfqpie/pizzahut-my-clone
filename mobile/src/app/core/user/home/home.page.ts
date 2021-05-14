import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Data
  user = {
    'name': 'Syafiq'
  }

  // Image
  imgBanner = 'https://static.phdvasia.com/sg1/banners/phdv-1618787866982-KRP%20HERO%20BANNER_782x256_APP.png'
  imgLogo = 'assets/img/logo/logo_main.png'
  iconDelivery = 'assets/img/icon/delivery.svg'
  iconTapau = 'assets/img/icon/tapau.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
