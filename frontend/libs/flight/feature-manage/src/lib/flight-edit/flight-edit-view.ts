import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService, initialFlight } from '@flight42/flight-domain';
import { BaseLayout } from "@flight42/shared-ui-design-system-layouts";

@Component({
  imports: [JsonPipe, BaseLayout],
  templateUrl: './flight-edit-view.html',
})
export class FlightEditView {
  _flightService = inject(FlightService);
  _aircraftServiceFacade = inject(AircraftServiceFacade);
  _route = inject(ActivatedRoute);

  _flight = signal(initialFlight);
  _aircraftInfos = signal<AircraftInfoDto[]>([]);

  constructor() {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) this._loadData(parseInt(id));
  }

  async _loadData(id: number) {
    const flight = await this._flightService.loadFlightById(id);
    this._flight.set(flight);
    const aircraftInfos = await this._aircraftServiceFacade.loadAircraftInfos();
    this._aircraftInfos.set(aircraftInfos);
  }
  } 
}
