import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }
