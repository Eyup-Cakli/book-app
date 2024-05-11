import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BookData } from '../models/book-data.const';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BookModel } from '../models/book-model.interface';
import { Categories } from '../models/categorie.const';
import { StarComponent } from '../star/star.component';
import { BookCardComponent } from '../book-card/book-card.component';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [MatButtonModule, MatIconModule, MatBadgeModule, StarComponent, BookCardComponent, HeaderComponent]
})
export class HomePageComponent {

  bookData = BookData;
  bookStar = BookData;
  filteredData: BookModel[] = BookData;
  basketList: BookModel[] = [];
  categoriesButton: string[] = [];

  ngOnInit() {
    // for (const category in Categories) {
    //   this.categoriesButton.push(category);
    // }
    this.categoriesButton = Object.keys(Categories);
  }

  addBasket(book: BookModel) {
    const index = this.basketList.findIndex((data) => data.name === book.name);
    if (index < 0) this.basketList.push(book);
  }

  filterCategory(category: string){
    if (category === "all") {
      this.filteredData = this.bookData;
    } else {
    this.filteredData = this.bookData.filter(data => data.category === category);

    }
  }
}
