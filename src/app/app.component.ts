import { Component } from '@angular/core';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mock: Hotel = {
    title: 'Mallorca Palace Suites Golf and Spa',
    description: 'Mallorca Palace is situated in one of the most beautiful spots on the island of Mallorca.',
    stars: 4
  };
}
