import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppIsbnPipe } from './shared/app-isbn.pipe';

@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    AppIsbnPipe,
    BookEditComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [BookListComponent, BookEditComponent],
})
export class BookModule {}
