import { HttpClient, httpResource } from "@angular/common/http";
import { inject, Injectable, Signal } from "@angular/core";
import { AircraftInfoDto } from "../dtos/aircraft-info-dto";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AircraftService {
    http = inject(HttpClient);

    loadAircraftInfos() {
        return firstValueFrom(this.http.get<AircraftInfoDto[]>('http://localhost:5100/api/aircraft-infos'));
    }

    loadAircraftInfoById(id: number) {
        return firstValueFrom(this.http.get<AircraftInfoDto>(`http://localhost:5100/api/aircraft-infos/${id}`));
    }

    createAircraftInfoResource(aircraftId: Signal<number | undefined>) {
        return httpResource<AircraftInfoDto>(() => aircraftId() ? `http://localhost:5100/api/aircraft-infos/${aircraftId()}` : undefined);
    }
}