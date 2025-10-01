import { Routes } from "@angular/router";
import { DashboardView } from "./dashboard/dashboard-view";

export const AIRCRAFT_FEATURE_DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardView
    }
];