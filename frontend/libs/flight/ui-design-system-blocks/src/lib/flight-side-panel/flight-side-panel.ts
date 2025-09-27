import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FlightCard } from "@flight42/flight-ui-design-system-elements";
import { FlightTimes, initialFlight } from '@flight42/flight-domain';
import { FormsModule } from '@angular/forms';
import { DateTimePicker, Button } from "@flight42/shared-ui-design-system-elements";

@Component({
  selector: 'ds-flight-side-panel',
  imports: [FormsModule, FlightCard, DateTimePicker, Button],
  templateUrl: './flight-side-panel.html',
  styleUrl: './flight-side-panel.css',
})
export class FlightSidePanel implements OnChanges {
  /** The flight to display */
  @Input() flight = initialFlight;
  /** Event emitted when flight times change */
  @Output() flightTimesChange = new EventEmitter<FlightTimes>();

  _flightTimes = initialFlight.times

  ngOnChanges() {
    this._flightTimes = { ...this.flight.times };
  }

  onSaveFlightTimes() {
    this.flightTimesChange.emit(this._flightTimes);
  }
}
