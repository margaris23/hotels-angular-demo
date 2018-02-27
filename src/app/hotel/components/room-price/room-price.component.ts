import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Currency } from '../../hotel.model';

@Component({
  selector: 'app-room-price',
  templateUrl: './room-price.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomPriceComponent {
  @Input() public adults: number;
  @Input() public pricePerAdult: number;
  @Input() public children: number;
  @Input() public pricePerChild: number;
  @Input() public currency: string = Currency.EUR;
}
