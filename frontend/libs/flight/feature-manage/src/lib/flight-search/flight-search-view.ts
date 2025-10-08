import { Component, inject, signal } from '@angular/core';
import { Flight, FlightCriteriaDto, FlightInfoDto, FlightService, FlightTimes, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { SearchLayout } from '@flight42/shared-ui-design-system-layouts';
import { FlightCriteria, FlightList, FlightSidePanel } from '@flight42/flight-ui-design-system-blocks';
import { AircraftInfoDto, AircraftServiceFacade } from '@flight42/aircraft-api';

@Component({
  imports: [SearchLayout, FlightCriteria, FlightList, FlightSidePanel],
  templateUrl: './flight-search-view.html',
})
export class FlightSearchView {
  _criteria = signal<FlightCriteriaDto>({ from: 'Munich', to: 'Berlin' });
  _showLoading = signal(false);
  _flights = signal<FlightInfoDto[]>([]);
  _selectedFlight = signal<Flight | null>(null);
  _selectedAircraft = signal<AircraftInfoDto | null>(null);

  _flightService = inject(FlightService);
  _aircraftServiceFacade = inject(AircraftServiceFacade);

  reset() {
    this._criteria.set(initialFlightCriteriaDto);
    this._flights.set([]);
    this._selectedFlight.set(null);
    this._selectedAircraft.set(null);
  }

  async setCriteria(criteria: FlightCriteriaDto) {
    this._showLoading.set(true);
    this._criteria.set(criteria);
    await this.loadFlightInfos();
    this._showLoading.set(false);
  }

  async selectFlight(flightInfoDto: FlightInfoDto) {
    this._showLoading.set(true);
    const flight = await this._flightService.loadFlightById(flightInfoDto.id);
    this._selectedFlight.set(flight);
    const aircraft = await this._aircraftServiceFacade.loadAircraftInfoById(flight.operator.aircraftId);
    this._selectedAircraft.set(aircraft);
    this._showLoading.set(false);
  }

  async updateSelectedFlightTimes(times: FlightTimes) {
    const selectedFlight = this._selectedFlight();
    if (selectedFlight) {
      this._showLoading.set(true);
      const updatedSelectedFlight = { ...selectedFlight, times };
      this._selectedFlight.set(updatedSelectedFlight);
      await this._flightService.updateFlight(updatedSelectedFlight);
      await this.loadFlightInfos();
      this._showLoading.set(false);
    }
  }

  private async loadFlightInfos() {
    const flights = await this._flightService.loadFlightInfos(this._criteria().from, this._criteria().to);
    this._flights.set(flights);
  }
}
