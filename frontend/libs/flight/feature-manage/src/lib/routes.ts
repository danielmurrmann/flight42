import { Routes } from '@angular/router';
import { FlightSearchView } from './flight-search/flight-search-view';
import { FlightEditView } from './flight-edit/flight-edit-view';

export const FLIGHT_FEATURE_MANAGE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  }, {
    path: 'search',
    component: FlightSearchView
  }, {
    path: 'edit/:id',
    component: FlightEditView
  }
];