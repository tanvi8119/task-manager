import { Injectable } from '@angular/core';
import { TaskDetails } from './task.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  private url = 'assets/task.json';

  onGet(): Observable<TaskDetails[]> {
    return this.httpClient.get<TaskDetails[]>(this.url).pipe(
      catchError(e => this.errorHandeler(e)));
  }

  errorHandeler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');

  }

  onPost(data) {
    // to add new data
  }

  onPut(data) {
    // to update existing data
  }
}
