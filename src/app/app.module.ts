import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { HotelService } from './services/hotel.service';
import { HotelRoomComponent } from './hotel-room/hotel-room.component';
import { hotelReducer as hotel } from './hotel.reducer';
import { RoomSelectedPipe } from './pipes/room-selected.pipe';
import { SelectedRoomsComponent } from './selected-rooms/selected-rooms.component';
import { SelectedRoomComponent } from './selected-room/selected-room.component';
import { RoomOrderPipe } from './pipes/room-order.pipe';
import { HotelRatingComponent } from './hotel-rating/hotel-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelRoomsComponent,
    HotelRoomComponent,
    SelectedRoomsComponent,
    SelectedRoomComponent,
    RoomSelectedPipe,
    RoomOrderPipe,
    HotelRatingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ hotel }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
