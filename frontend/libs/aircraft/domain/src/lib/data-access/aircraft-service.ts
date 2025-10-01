import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
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
}