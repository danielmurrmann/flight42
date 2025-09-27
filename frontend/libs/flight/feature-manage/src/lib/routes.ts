import { Routes } from '@angular/router';
import { FlightSearchView } from './flight-search/flight-search-view';

export const FLIGHT_FEATURE_MANAGE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  }, {
    path: 'search',
    component: FlightSearchView
  }
];