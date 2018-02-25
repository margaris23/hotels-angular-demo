import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-hotel-rating',
  templateUrl: './hotel-rating.component.html',
  styleUrls: ['./hotel-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRatingComponent {
  @Input() public set value(rating: number) {
    if (!rating) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      this.stars.push(0);
    }
  }

  public stars: number[] = [];
}
