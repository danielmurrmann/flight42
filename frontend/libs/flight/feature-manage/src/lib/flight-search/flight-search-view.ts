import { Component, effect, inject } from '@angular/core';
import { FlightCriteriaDto, FlightTimes } from '@flight42/flight-domain';
import { SearchLayout } from '@flight42/shared-ui-design-system-layouts';
import { FlightCriteria, FlightList, FlightSidePanel } from '@flight42/flight-ui-design-system-blocks';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightSearchStore } from './flight-search-store';

@Component({
  imports: [SearchLayout, FlightCriteria, FlightList, FlightSidePanel],
  templateUrl: './flight-search-view.html',
})
export class FlightSearchView {
  store = inject(FlightSearchStore);

  _router = inject(Router);
  _route = inject(ActivatedRoute);

  onEdit() {
    const flight = this.store.selectedFlightInfo();
    if(flight) {
      this._router.navigate(['../edit', flight.id], { relativeTo: this._route });
    }
  }
}
