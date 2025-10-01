import { Component, input } from '@angular/core';
import { initialAircraftInfoDto } from '@flight42/aircraft-domain';

@Component({
  selector: 'lib-aircraft-card',
  imports: [],
  templateUrl: './aircraft-card.html',
  styleUrl: './aircraft-card.css',
})
export class AircraftCard {
  /** The aircraft to display */
  aircraft = input(initialAircraftInfoDto);
}
