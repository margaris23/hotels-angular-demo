import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppHotelModule } from './hotel/app-hotel.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { hotelReducer as hotel } from './hotel/hotel.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppHotelModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ hotel }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
