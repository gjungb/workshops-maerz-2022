import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, takeUntil, tap } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookEditComponent implements OnInit, OnDestroy {
  constructor(private readonly fb: FormBuilder) {}

  /**
   * TODO: replace hard coded data with @Input
   */
  readonly book: Book = {
    isbn: '9780071494618',
    title: 'Hacking Exposed Web 2.0',
    author: 'Rich Cannings, Himanshu Dwivedi, Zane Lackey',
  };

  form!: FormGroup;

  private emitter = new EventEmitter<void>();

  ngOnInit(): void {
    this.form = this.fb.group({
      isbn: this.fb.control({
        value: this.book.isbn,
        disabled: true,
      }),
      title: this.fb.control(this.book.title, {
        validators: [Validators.required, Validators.minLength(2)],
      }),
    });

    const control = this.form.get('title');

    control?.valueChanges
      .pipe(
        debounceTime(300),
        tap((value) => console.log(value)),
        takeUntil(this.emitter)
      )
      .subscribe({
        // effect / side effect
        next: () => {},
      });

    this.form.statusChanges.subscribe({
      next: (status) => console.log(status),
    });
  }

  ngOnDestroy(): void {
      this.emitter.next();
  }

  /**
   *
   * @param value
   */
  updateBook(value: Partial<Book>): void {
    debugger;
    // TODO: send data to server
  }
}
