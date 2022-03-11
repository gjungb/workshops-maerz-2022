import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input('myBook')
  content!: Book;

  /**
   * 
   */
  @Output()
  selectContent = new EventEmitter<Book>();

  customStyle = {
    backgroundColor: 'yellow',
    color: 'hotpink'
  };

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param ev 
   */
  handleDetailClick(ev: MouseEvent): void {
    // Effect / Side Effect
    this.selectContent.emit(this.content);
    
  }

}
