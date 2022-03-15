import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppIsbnPipe } from './shared/app-isbn.pipe';



@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    AppIsbnPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }
