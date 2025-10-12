import { FlightCriteriaDto, FlightInfoDto, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const FlightSearchStore = signalStore(
    { providedIn: 'root' },
    withState({
        criteria: { from: 'Munich', to: 'Berlin' } as FlightCriteriaDto,
        selectedFlightInfo: undefined as FlightInfoDto | undefined,
    }),
    withMethods(store => ({
        reset() {
            patchState(store, {
                criteria: initialFlightCriteriaDto,
                selectedFlightInfo: undefined
            });
        },
        setCriteria(criteria: FlightCriteriaDto) {
            patchState(store, { criteria, selectedFlightInfo: undefined });
        },
        selectFlight(selectedFlightInfo: FlightInfoDto) {
            patchState(store, { selectedFlightInfo });
        }
    }))
);