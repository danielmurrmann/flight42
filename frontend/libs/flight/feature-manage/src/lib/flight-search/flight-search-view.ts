import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { FlightCriteriaDto, FlightInfoDto, FlightService, FlightTimes, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { SearchLayout } from '@flight42/shared-ui-design-system-layouts';
import { FlightCriteria, FlightList, FlightSidePanel } from '@flight42/flight-ui-design-system-blocks';
import { AircraftServiceFacade } from '@flight42/aircraft-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [SearchLayout, FlightCriteria, FlightList, FlightSidePanel],
  templateUrl: './flight-search-view.html',
})
export class FlightSearchView {
  _criteria = signal<FlightCriteriaDto>({ from: 'Munich', to: 'Berlin' });
  _selectedFlightInfo = signal<FlightInfoDto | undefined>(undefined);

  _flightService = inject(FlightService);
  _aircraftServiceFacade = inject(AircraftServiceFacade);
  _router = inject(Router);
  _route = inject(ActivatedRoute);

  _flightsResource = this._flightService.createFlightInfosResource(this._criteria);
  _selectedFlightResource = this._flightService.createFlightResource(computed(() => this._selectedFlightInfo()?.id));
  _selectedAircraftResource = this._aircraftServiceFacade.createAircraftInfoResource(computed(() => this._selectedFlightResource.value()?.operator.aircraftId));

  _showLoading = linkedSignal(() => this._flightsResource.isLoading() || this._selectedFlightResource.isLoading() || this._selectedAircraftResource.isLoading());

  reset() {
    this._criteria.set(initialFlightCriteriaDto);
    this._flightsResource.set([]);
    this._selectedFlightInfo.set(undefined);
  }

  async setCriteria(criteria: FlightCriteriaDto) {
    this._showLoading.set(true);
    this._criteria.set(criteria);
  }

  async selectFlight(selectedFlightInfo: FlightInfoDto) {
    this._selectedFlightInfo.set(selectedFlightInfo);
  }

  async updateSelectedFlightTimes(times: FlightTimes) {
    const selectedFlight = this._selectedFlightResource.value();
    if (selectedFlight) {
      this._showLoading.set(true);
      const updatedSelectedFlight = { ...selectedFlight, times };
      this._selectedFlightResource.set(updatedSelectedFlight);
      this._flightService.updateFlight(updatedSelectedFlight);
      await this._flightsResource.reload();
    }
  }

  onEdit() {
    const flight = this._selectedFlightResource.value();
    if(flight) {
      this._router.navigate(['../edit', flight.id], { relativeTo: this._route });
    }
  }
}
