import { HttpClient, httpResource } from "@angular/common/http";
import { inject, Injectable, Signal } from "@angular/core";
import { FlightInfoDto } from "../dtos/flight-info-dto";
import { Flight } from "../domain/flight";
import { firstValueFrom } from "rxjs";
import { FlightCriteriaDto } from "../dtos/flight-criteria-dto";

@Injectable({ providedIn: 'root' })
export class FlightService {
    http = inject(HttpClient);

    loadFlightInfos(from: string, to: string) {
        return firstValueFrom(this.http.get<FlightInfoDto[]>('http://localhost:5100/api/flight-infos', {
            params: { from, to }
        }));
    }

    createFlightInfosResource(criteria: Signal<FlightCriteriaDto>) {
        return httpResource<FlightInfoDto[]>(() => {
            const criteriaValue = criteria();
            if (!criteriaValue.from || !criteriaValue.to) return undefined;
            return { 
                url: 'http://localhost:5100/api/flight-infos',
                params: { ...criteriaValue }
            }
        }, { 
            defaultValue: [] 
        });
    }

    loadFlightById(id: number) {
        return firstValueFrom(this.http.get<Flight>(`http://localhost:5100/api/flights/${id}`));
    }

    createFlightResource(flightId: Signal<number | undefined>) {
        return httpResource<Flight>(() => flightId() ? `http://localhost:5100/api/flights/${flightId()}` : undefined);
    }

    loadNextFlights() {
        return firstValueFrom(this.http.get<FlightInfoDto[]>('http://localhost:5100/api/flight-infos', {
            params: { date: new Date().toISOString() }
        }));
    }

    updateFlight(flight: Flight) {
        return firstValueFrom(this.http.put(`http://localhost:5100/api/flights/${flight.id}`, flight));
    }
}