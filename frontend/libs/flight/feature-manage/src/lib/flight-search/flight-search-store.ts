import { computed } from '@angular/core';
import { initialAircraftInfoDto } from '@flight42/aircraft-api';
import { FlightCriteriaDto, FlightInfoDto, FlightTimes, initialFlight, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { withCallState } from '@flight42/shared-util';
import { withHypermediaAction, withHypermediaResource, withLinkedHypermediaResource } from '@angular-architects/ngrx-hateoas';

export const FlightSearchStore = signalStore(
    { providedIn: 'root' },
    withCallState(),
    withState({
        criteria: { from: 'Munich', to: 'Berlin' } as FlightCriteriaDto,
        selectedFlightInfo: undefined as FlightInfoDto | undefined,
    }),
    withHypermediaResource('flights', [] as FlightInfoDto[]),
    withLinkedHypermediaResource('selectedFlight', initialFlight, store => store.selectedFlightInfo, 'flight'),
    withLinkedHypermediaResource('selectedAircraft', initialAircraftInfoDto, store => store.selectedFlight, 'aircraft'),
    withHypermediaAction('_updateSelectedFlightTimes', store => store.selectedFlight.times, 'update'),
    withMethods(store => ({
        reset() {
            patchState(store, {
                criteria: initialFlightCriteriaDto,
                flights: [],
                selectedFlightInfo: undefined,
                selectedFlight: initialFlight,
                selectedAircraft: initialAircraftInfoDto
            });
        },
        setCriteria(criteria: FlightCriteriaDto) {
            patchState(store, { criteria, selectedFlightInfo: undefined });
            store.loadFlightsFromUrl(`http://localhost:5100/api/flight-infos?from=${criteria.from}&to=${criteria.to}`);
        },
        selectFlight(selectedFlightInfo: FlightInfoDto) {
            patchState(store, { selectedFlightInfo });
        },
        async updateSelectedFlightTimes(times: FlightTimes) {
            if (store.selectedFlightInfo()) {
                const selectedFlight = store.getSelectedFlightAsPatchable();
                selectedFlight.times.set(times);
                await store._updateSelectedFlightTimes();
                await store.reloadFlights();
            }
        }
    })),
    withHooks({
        onInit: store => {
            store.connectIsLoading(computed(() => store.flightsState.isLoading() || store.selectedFlightState.isLoading() || store.selectedAircraftState.isLoading() || store._updateSelectedFlightTimesState.isExecuting()));
        }
    })
);