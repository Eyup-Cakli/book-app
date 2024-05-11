import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { BookModel } from '../models/book-model.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [StarComponent, MatButton],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book: any = "";
  @Output() addBasketEvent =new EventEmitter<BookModel>();

  addBasket(book: BookModel) {
    this.addBasketEvent.emit(book);
  }
}
