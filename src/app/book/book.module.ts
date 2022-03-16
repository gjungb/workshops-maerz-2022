import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppIsbnPipe } from './shared/app-isbn.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    AppIsbnPipe,
    BookEditComponent,
    BookDetailComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [BookListComponent, BookEditComponent],
})
export class BookModule {}
