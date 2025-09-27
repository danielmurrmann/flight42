import { Component, inject } from '@angular/core';
import { Flight, FlightCriteriaDto, FlightInfoDto, FlightService, FlightTimes, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { SearchLayout } from '@flight42/shared-ui-design-system-layouts';
import { FlightCriteria, FlightList, FlightSidePanel } from '@flight42/flight-ui-design-system-blocks';

@Component({
  imports: [SearchLayout, FlightCriteria, FlightList, FlightSidePanel],
  templateUrl: './flight-search-view.html',
})
export class FlightSearchView {
  _criteria: FlightCriteriaDto = { from: 'Munich', to: 'Berlin' };
  _showLoading = false;
  _flights: FlightInfoDto[] = [];
  _selectedFlight: Flight | null = null;

  _flightService = inject(FlightService);

  reset() {
    this._criteria = initialFlightCriteriaDto;
    this._flights = [];
    this._selectedFlight = null;
  }

  async setCriteria(criteria: FlightCriteriaDto) {
    this._showLoading = true;
    this._criteria = criteria;
    await this.loadFlightInfos();
    this._showLoading = false;
  }

  async selectFlight(flightInfoDto: FlightInfoDto) {
    this._showLoading = true;
    const flight = await this._flightService.loadFlightById(flightInfoDto.id);
    this._selectedFlight = flight;
    this._showLoading = false;
  }

  async updateSelectedFlightTimes(times: FlightTimes) {
    if (this._selectedFlight) {
      this._showLoading = true;
      this._selectedFlight.times = times;
      this._flightService.updateFlight(this._selectedFlight);
      await this.loadFlightInfos();
      this._showLoading = false;
    }
  }

  private async loadFlightInfos() {
    this._showLoading = true;
    const flights = await this._flightService.loadFlightInfos(this._criteria.from, this._criteria.to);
    this._flights = flights;
    this._showLoading = false;
  }
}
