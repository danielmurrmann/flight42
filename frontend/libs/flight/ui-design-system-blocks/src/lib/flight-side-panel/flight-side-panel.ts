import { Component, model } from '@angular/core';
import { FlightCard } from "@flight42/flight-ui-design-system-elements";
import { initialFlight } from '@flight42/flight-domain';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ds-flight-side-panel',
  imports: [FormsModule, FlightCard],
  templateUrl: './flight-side-panel.html',
  styleUrl: './flight-side-panel.css',
})
export class FlightSidePanel {
  /** The flight to display */
  flight = model(initialFlight);
}
