import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FlightInfoDto } from "../dtos/flight-info-dto";
import { Flight } from "../domain/flight";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FlightService {
    http = inject(HttpClient);

    loadFlightInfos(from: string, to: string) {
        return firstValueFrom(this.http.get<FlightInfoDto[]>('http://localhost:5100/api/flight-infos', {
            params: { from, to }
        }));
    }

    loadFlightById(id: number) {
        return firstValueFrom(this.http.get<Flight>(`http://localhost:5100/api/flights/${id}`));
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