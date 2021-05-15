import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-layout',
  templateUrl: './system-layout.page.html',
  styleUrls: ['./system-layout.page.scss'],
})
export class SystemLayoutPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
