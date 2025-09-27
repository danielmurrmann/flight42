import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayout } from "@flight42/shared-ui-design-system-layouts";
import { FlightGrid } from "@flight42/flight-ui-design-system-blocks";
import { FlightInfoDto, FlightService } from '@flight42/flight-domain';

@Component({
  imports: [CommonModule, BaseLayout, FlightGrid],
  templateUrl: './next-flights-view.html',
})
export class NextFlightsView {
  _flights = signal<FlightInfoDto[]>([]);
  _flightService = inject(FlightService);

  constructor() {
    this.loadNextFlights();
  }

  async loadNextFlights() {
    const flights = await this._flightService.loadNextFlights();
    this._flights.set(flights);
  }
}
