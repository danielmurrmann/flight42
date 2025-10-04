import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Control, form, required, schema, submit } from '@angular/forms/signals';
import { Flight, FlightService, initialFlight, initialFlightClassPrice } from '@flight42/flight-domain';
import { BaseLayout } from '@flight42/shared-ui-design-system-layouts';
import { TextBox, Button, Dropdown } from '@flight42/shared-ui-design-system-elements';
import { AircraftInfoDto, AircraftServiceFacade } from '@flight42/aircraft-api';

@Component({
  imports: [JsonPipe, BaseLayout, Control, TextBox, Button, Dropdown],
  templateUrl: './flight-edit-view.html',
})
export class FlightEditView {
  _flightService = inject(FlightService);
  _aircraftServiceFacade = inject(AircraftServiceFacade);
  _route = inject(ActivatedRoute);

  _flight = signal(initialFlight);
  _aircraftInfos = signal<AircraftInfoDto[]>([]);

  _flightSchema = schema<Flight>((path) => {
    required(path.connection.from);
    required(path.connection.to);
  });

  _flightForm = form(this._flight);

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

  _onAddClassPrice() {
    const classPrices = this._flightForm.price.classPrices();
    classPrices.value.update((currentValue) => [...currentValue, { ...initialFlightClassPrice }]);
  }

  _onSave() {
    submit(this._flightForm, async (form) => {
      const updatedFlight = form().value;
      await this._flightService.updateFlight(updatedFlight());
    });
  }
}
