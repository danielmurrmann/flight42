import { Route } from '@angular/router';
import AIRCRAFT_FEATURE_DASHBOARD_ROUTES from '@flight42/aircraft-feature-dashboard';

export const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    children: AIRCRAFT_FEATURE_DASHBOARD_ROUTES
}];
