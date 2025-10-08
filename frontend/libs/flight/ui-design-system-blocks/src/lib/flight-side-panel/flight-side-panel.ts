import { Component, input, linkedSignal, output } from '@angular/core';
import { FlightCard } from "@flight42/flight-ui-design-system-elements";
import { FlightTimes, initialFlight } from '@flight42/flight-domain';
import { DateTimePicker, Button } from "@flight42/shared-ui-design-system-elements";
import { AircraftInfoDto, AircraftCard } from '@flight42/aircraft-api';
import { Control, form } from '@angular/forms/signals';

@Component({
  selector: 'ds-flight-side-panel',
  imports: [Control, FlightCard, DateTimePicker, Button, AircraftCard],
  templateUrl: './flight-side-panel.html',
  styleUrl: './flight-side-panel.css',
})
export class FlightSidePanel {
  /** The flight to display */
  flight = input(initialFlight);
  /** The aircraft info to display */
  aircraft = input<AircraftInfoDto | undefined>(undefined);
  /** Event emitted when flight times change */
  flightTimesChange = output<FlightTimes>();
  
  _flightTimesTakeOff = linkedSignal(() => this.flight().times.takeOff);
  _flightTimesLanding = linkedSignal(() => this.flight().times.landing);

  _modifiedFlightTimes = linkedSignal(() => this.flight().times);

  _flightTimesForm = form(this._modifiedFlightTimes);
  
  onSaveFlightTimes() {
    this.flightTimesChange.emit(this._modifiedFlightTimes());
  }
}
