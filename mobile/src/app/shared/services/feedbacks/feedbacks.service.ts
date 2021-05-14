import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Feedback } from './feedbacks.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  // URL
  public urlFeedbacks: string = environment.baseUrl + 'v1/feedbacks/'

  // Data
  feedback: Feedback
  feedbacks: Feedback[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<Feedback> {
    return this.http.post<any>(this.urlFeedbacks, body).pipe(
      tap((res) => {
        this.feedback = res
        // console.log('Feedback: ', this.feedback)
      })
    )
  }

  getAll(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.urlFeedbacks).pipe(
      tap((res) => {
        this.feedbacks = res
        // console.log('Feedbacks: ', this.feedbacks)
      })
    )
  }

  getOne(id: number): Observable<Feedback> {
    let urlTemp = this.urlFeedbacks + id + '/'
    return this.http.get<Feedback>(urlTemp).pipe(
      tap((res) => {
        this.feedback = res
        // console.log('Feedback: ', this.feedback)
      })
    )
  }

  patch(id: number, body: any): Observable<Feedback> {
    let urlTemp = this.urlFeedbacks + id + '/'
    return this.http.patch<Feedback>(urlTemp, body).pipe(
      tap((res) => {
        this.feedback = res
        // console.log('Feedback: ', this.feedback)
      })
    )
  }

  activate(id: number): Observable<Feedback> {
    let urlTemp = this.urlFeedbacks + id + '/activate/'
    return this.http.get<Feedback>(urlTemp).pipe(
      tap((res) => {
        this.feedback = res
        // console.log('Feedback: ', this.feedback)
      })
    )
  }

  deactivate(id: number): Observable<Feedback> {
    let urlTemp = this.urlFeedbacks + id + '/deactivate/'
    return this.http.get<Feedback>(urlTemp).pipe(
      tap((res) => {
        this.feedback = res
        // console.log('Feedback: ', this.feedback)
      })
    )
  }

}
