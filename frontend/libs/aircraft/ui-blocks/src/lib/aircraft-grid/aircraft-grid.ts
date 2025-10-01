import { Component, input } from '@angular/core';
import { AircraftInfoDto } from '@flight42/aircraft-domain';
import { AircraftCard } from "@flight42/aircraft-ui-elements";

@Component({
  selector: 'lib-aircraft-grid',
  imports: [AircraftCard],
  templateUrl: './aircraft-grid.html',
  styleUrl: './aircraft-grid.css',
})
export class AircraftGrid {
  /** The data source */
  data = input<AircraftInfoDto[]>([]);
}
