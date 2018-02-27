import { Pipe, PipeTransform } from '@angular/core';
import { State as SelectedRooms } from '../hotel.reducer';

@Pipe({ name: 'roomSelected' })
export class RoomSelectedPipe implements PipeTransform {
  public transform(selectedRooms: SelectedRooms, roomId?: string): any {
    return selectedRooms
      && !!roomId
      && !!selectedRooms[roomId];
  }
}
