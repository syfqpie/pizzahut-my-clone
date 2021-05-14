import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FeedbacksService } from 'src/app/shared/services/feedbacks/feedbacks.service';
import { formMessageList } from 'src/assets/messages/form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  // Data
  user = {
    'name': 'John Doe',
    'email': 'john@doe.com.my',
    'phone': '0123456789'
  }
  config = {
    'hotline': '+603 1300 88 2525'
  }

  // Form
  feedbackForm: FormGroup
  formMessages = formMessageList

  // Subscriber
  subscriber: Subscription

  // Checker
  isWaiting: boolean = false

  constructor(
    private feedbackService: FeedbacksService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm()
  }

  getData() {
    this.subscriber = this.feedbackService.getAll().subscribe(
      () => {},
      () => {},
      () => {}
    )
  }

  initForm() {
    this.feedbackForm = this.fb.group({
      message: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  checker(event) {
    // console.log(this.feedbackForm.value.message.length)
  }

  submit() {
    this.isWaiting = true
    this.subscriber = this.feedbackService.create(this.feedbackForm.value).subscribe(
      () => {
        this.isWaiting = false
      },
      () => {
        this.isWaiting = false
      },
      () => {}
    )
  }

}
