import { Pipe, PipeTransform } from '@angular/core';
import { State as SelectedRooms } from './hotel.reducer';

@Pipe({ name: 'hotelSelected' })
export class HotelSelectedPipe implements PipeTransform {
  public transform(selectedRooms: SelectedRooms, roomId?: string): any {
    return selectedRooms
      && !!roomId
      && !!selectedRooms[roomId];
  }
}
