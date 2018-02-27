import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HotelService } from './services/hotel.service';
import { RoomSelectedPipe } from './pipes/room-selected.pipe';
import { RoomOrderPipe } from './pipes/room-order.pipe';
import * as components from './components/index';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    RoomSelectedPipe,
    RoomOrderPipe,
    ...components.included
  ],
  providers: [HotelService],
  exports: [
    ...components.exported
  ]
})
export class AppHotelModule { }
