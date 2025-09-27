import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flight-manage'
    },
    {
        path: 'flight-manage',
        loadChildren: () => import('@flight42/flight-feature-manage')
    },
    {
        path: 'flight-next-flights',
        loadChildren: () => import('@flight42/flight-feature-next-flights')
    }
];
