import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  // Data
  user = {
    'name': 'John Doe',
    'email': 'john@doe.com.my',
    'phone': '0123456789'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
