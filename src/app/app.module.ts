import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { ResultComponent } from './result/result.component';
import { AppHotelModule } from './hotel/app-hotel.module';
import { AppComponent } from './app.component';
import { hotelReducer as hotel } from './hotel/hotel.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppHotelModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ hotel }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
