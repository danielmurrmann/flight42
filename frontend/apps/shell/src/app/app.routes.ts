import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flight/manage'
    },
    {
        path: 'flight/manage',
        loadChildren: () => loadRemoteModule('flight', './feature-manage')
    },
    {
        path: 'flight/next-flights',
        loadChildren: () => loadRemoteModule('flight', './feature-next-flights')
    },
    {
        path: 'aircraft/dashboard',
        loadChildren: () => loadRemoteModule('aircraft', './feature-dashboard')
    }
];
