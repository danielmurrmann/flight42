import { Component, signal } from '@angular/core';
import { FlightCriteria, FlightList } from '@flight42/flight-ui-design-system-blocks';
import { SearchLayout } from '@flight42/shared-ui-design-system-layouts';
import { FlightCriteriaDto, FlightInfoDto, initialFlightCriteriaDto } from '@flight42/flight-domain';

@Component({
  imports: [SearchLayout, FlightCriteria, FlightList],
  template: `
    <ds-search-layout title="Flights" (resetPage)="reset()">
      <ds-flight-criteria
        search-criteria
        [criteria]="_criteria()"
        (searchFlights)="searchFlights($event)"
      />
      <ds-flight-list search-result [data]="_flights()" />
    </ds-search-layout>
  `,
})
export class FlightSearch {
  _criteria = signal(initialFlightCriteriaDto);
  _flights = signal<FlightInfoDto[]>([]);

  reset() {
    this._criteria.set(initialFlightCriteriaDto);
    this._flights.set([]);
  }

  searchFlights(criteria: FlightCriteriaDto) {
    console.log('Searching with criteria', criteria);
    this._flights.set([
      {
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: null
      },
      {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        delay: 15
      },
      {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        delay: null
      },
      {
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: null
      },
      {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        delay: 20
      },
      {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        delay: null
      },
      {
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: null
      },
      {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        delay: 15
      },
      {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        delay: null
      },
      {
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: null
      },
      {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        delay: 25
      },
      {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        delay: null
      }
    ]);
  }
}
