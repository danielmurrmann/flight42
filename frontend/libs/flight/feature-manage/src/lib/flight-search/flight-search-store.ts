import { computed, inject } from '@angular/core';
import { AircraftServiceFacade } from '@flight42/aircraft-api';
import { FlightCriteriaDto, FlightInfoDto, FlightService, FlightTimes, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { patchState, signalMethod, signalStore, type, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { removeAllEntities, setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { setIsLoading, withCallState } from '@flight42/shared-util';

export const FlightSearchStore = signalStore(
    { providedIn: 'root' },
    withCallState(),
    withEntities({ entity: type<FlightInfoDto>(), collection: 'flight' }),
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
    withMethods(store => ({
        reset() {
            patchState(store, {
                criteria: initialFlightCriteriaDto,
                selectedFlightInfo: undefined,
            },
            removeAllEntities({ collection: 'flight' }));
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
                patchState(store, setIsLoading(true));
                const updatedSelectedFlight = { ...selectedFlight, times };
                const updatedFlightInfo = { ...store.flightEntityMap()[selectedFlight.id], date: times.takeOff } satisfies FlightInfoDto;
                store.selectedFlightResource.set(updatedSelectedFlight);
                await store._flightService.updateFlight(updatedSelectedFlight);
                patchState(store, setEntity(updatedFlightInfo, { collection: 'flight' }), setIsLoading(false));
            }
        }
    })),
    withHooks({
        onInit: store => {
            store.connectIsLoading(computed(() => store.flightsResource.isLoading() || store.selectedFlightResource.isLoading() || store.selectedAircraftResource.isLoading()));
            signalMethod<FlightInfoDto[]>(flights => patchState(store, setAllEntities(flights, { collection: 'flight' })))(store.flightsResource.value);
        }
    })
);