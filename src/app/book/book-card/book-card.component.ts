import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

/**
 * Representational / stateless component
 */
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('myBook')
  content!: Book;

  /**
   * 
   */
  @Input()
  isFunky?: boolean;

  /**
   *
   */
  @Output()
  selectContent = new EventEmitter<Book>();

  customStyle = {
    backgroundColor: 'yellow',
    color: 'hotpink',
  };

  /**
   *
   * @param ev
   */
  handleDetailClick(ev: MouseEvent): void {
    // Effect / Side Effect
    this.selectContent.emit(this.content);
  }
}
