import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hotel } from '../hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelComponent {
  @Input() public hotel: Hotel;
}
