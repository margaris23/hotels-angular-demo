import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HotelSelectedPipe } from './hotel-selected.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelRoomsComponent,
    HotelRoomComponent,
    HotelSelectedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ hotel }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
