import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books!: Book[];

  constructor(private readonly bookApi: BookApiService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.bookApi
      .getAll()
      .pipe(
        tap((books) => {
          // Effect / Side Effect
          console.log(books);
        })
      )
      .subscribe({
        next: (value) => (this.books = value),
        complete: () => console.log('fertig'),
      });
  }
}
