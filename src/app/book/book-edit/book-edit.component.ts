import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookEditComponent implements OnInit {
  /**
   * TODO: replace hard coded data with @Input
   */
  readonly book: Book = {
    isbn: '9780071494618',
    title: 'Hacking Exposed Web 2.0',
    author: 'Rich Cannings, Himanshu Dwivedi, Zane Lackey',
  };

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  /**
   * 
   * @param value 
   */
  updateBook(value: Partial<Book>): void {
    debugger;
    // TODO: send data to server
  }
}
