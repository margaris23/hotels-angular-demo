import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { HotelService } from './services/hotel.service';
import { HotelRoomComponent } from './hotel-room/hotel-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelRoomsComponent,
    HotelRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
