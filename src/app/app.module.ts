import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
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
