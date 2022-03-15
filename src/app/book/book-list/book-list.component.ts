import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

/**
 * Stateful component
 */
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [],
})
export class BookListComponent implements OnInit, OnDestroy {
  // books!: Book[];

  books$!: Observable<Book[]>

  private sub?: Subscription;

  constructor(private readonly bookApi: BookApiService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // effect / side effect
    this.sub = interval(2_000)
      .pipe(tap((value) => console.log(value)))
      // TODO warum landen wir nicht in complete???
      .subscribe({
        complete: () => console.log('done'),
      });

    // 
    this.books$ = this.bookApi
      .getAll()
      .pipe(
        tap((books) => {
          // Effect / Side Effect
          console.log(books);
        })
      )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
