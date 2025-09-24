import { Component, input, linkedSignal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightCriteriaDto, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { TextBox, Button } from "@flight42/shared-ui-design-system-elements";

@Component({
  selector: 'ds-flight-criteria',
  imports: [TextBox, Button, FormsModule],
  templateUrl: './flight-criteria.html',
  styleUrl: './flight-criteria.css',
})
export class FlightCriteria {
  /** The flight search criteria to show */
  criteria = input(initialFlightCriteriaDto);
  /** Event emitted when the user clicks on the search button */
  searchFlights = output<FlightCriteriaDto>();

  _from = linkedSignal(() => this.criteria().from);
  _to = linkedSignal(() => this.criteria().to);

  _onSearch() {
    this.searchFlights.emit({ from: this._from(), to: this._to() });
  }
}
