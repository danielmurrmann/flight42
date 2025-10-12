import { computed, inject } from '@angular/core';
import { AircraftServiceFacade } from '@flight42/aircraft-api';
import { FlightCriteriaDto, FlightInfoDto, FlightService, FlightTimes, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { patchState, signalStore, withComputed, withLinkedState, withMethods, withProps, withState } from '@ngrx/signals';

export const FlightSearchStore = signalStore(
    { providedIn: 'root' },
    withState({
        criteria: { from: 'Munich', to: 'Berlin' } as FlightCriteriaDto,
        selectedFlightInfo: undefined as FlightInfoDto | undefined,
    }),
    withComputed(store => ({
        _selectedFlightId: () => store.selectedFlightInfo()?.id
    })),
    withProps(store => {
        const _flightService = inject(FlightService);
        const _aircraftServiceFacade = inject(AircraftServiceFacade);
        const flightsResource = _flightService.createFlightInfosResource(store.criteria);
        const selectedFlightResource = _flightService.createFlightResource(store._selectedFlightId);
        const selectedAircraftResource = _aircraftServiceFacade.createAircraftInfoResource(computed(() => selectedFlightResource.value()?.operator.aircraftId));
        return {
            _flightService,
            _aircraftServiceFacade,
            flightsResource,
            selectedFlightResource,
            selectedAircraftResource
        };
    }),
    withLinkedState(store => ({
        showLoading: () => store.flightsResource.isLoading() || store.selectedFlightResource.isLoading() || store.selectedAircraftResource.isLoading()
    })),
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
        },
        async updateSelectedFlightTimes(times: FlightTimes) {
            const selectedFlight = store.selectedFlightResource.value();
            if (selectedFlight) {
                patchState(store, { showLoading: true });
                const updatedSelectedFlight = { ...selectedFlight, times };
                store.selectedFlightResource.set(updatedSelectedFlight);
                await store._flightService.updateFlight(updatedSelectedFlight);
                await store.flightsResource.reload();
            }
        }
    }))
);