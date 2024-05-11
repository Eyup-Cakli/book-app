import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { BookModel } from '../models/book-model.interface';
import { MatBadge } from '@angular/material/badge';
import { Categories } from '../models/categorie.const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButton, MatBadge],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() basketList: BookModel[] = [];
  @Output() selectedCategoryEvent = new EventEmitter<string>();
  categoriesButton: string[] = [];

  ngOnInit() {
    this.categoriesButton = Object.keys(Categories);
  }

  selectedCategory(event: string) {
    this.selectedCategoryEvent.emit(event);
  }
}
