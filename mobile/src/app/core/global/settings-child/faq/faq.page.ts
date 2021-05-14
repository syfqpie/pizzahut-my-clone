import { Component, OnInit } from '@angular/core';
import { Faqs } from 'src/assets/messages/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqs: any[] = Faqs
  autoClose = false

  constructor() { }

  ngOnInit() {
  }

  toggleSelection(index) {
    this.faqs[index].open = !this.faqs[index].open

    if (this.autoClose && this.faqs[index].open) {
        this.faqs
            .filter((faq, faqIndex) => {
              faqIndex != index
            })
            .map(faq => {
              faq.open = false
            })
    }
  }

}
