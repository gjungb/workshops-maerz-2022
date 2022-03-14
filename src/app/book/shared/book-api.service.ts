import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly http: HttpClient) {}

  // asynchronous
  // Observable
  getAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>('http://localhost:4730/books')
      .pipe(delay(5_000));
  }
}
