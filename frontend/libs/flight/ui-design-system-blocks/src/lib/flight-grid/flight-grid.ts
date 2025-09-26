import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightInfoDto } from '@flight42/flight-domain';
import { FlightCard } from "@flight42/flight-ui-design-system-elements";

@Component({
  selector: 'ds-flight-grid',
  imports: [CommonModule, FlightCard],
  templateUrl: './flight-grid.html',
  styleUrl: './flight-grid.css',
})
export class FlightGrid {
  /** The data source */
  data = input<FlightInfoDto[]>([]);
}
