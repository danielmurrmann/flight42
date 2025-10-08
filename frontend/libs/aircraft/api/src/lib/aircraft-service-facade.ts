import { inject, Injectable, Signal } from "@angular/core";
import { AircraftService } from "@flight42/aircraft-domain";

@Injectable({ providedIn: 'root' }) 
export class AircraftServiceFacade {
    private _aircraftService = inject(AircraftService);

    loadAircraftInfos() {
        return this._aircraftService.loadAircraftInfos();
    }

    loadAircraftInfoById(id: number) {
        return this._aircraftService.loadAircraftInfoById(id);
    }

    createAircraftInfoResource(aircraftId: Signal<number | undefined>) {
        return this._aircraftService.createAircraftInfoResource(aircraftId);
    }
}
