import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  @Input() starNumber?: any;
  // starLength: any[] = [];
  starLength: number = 0;

  ngOnInit(){
    // const roundValue = Math.round(this.starNumber);
    // for (let index = 0; index < roundValue; index++) {
    //   this.starLength.push(index);
    // }
    this.starLength = Math.round(this.starNumber);
  }
}
