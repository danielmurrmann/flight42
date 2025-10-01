import { Component, inject, signal } from '@angular/core';
import { BaseLayout } from "@flight42/shared-ui-design-system-layouts";
import { AircraftGrid } from "@flight42/aircraft-ui-blocks";
import { AircraftInfoDto, AircraftService } from '@flight42/aircraft-domain';

@Component({
  imports: [BaseLayout, AircraftGrid],
  templateUrl: './dashboard-view.html',
})
export class DashboardView {
  _aircrafts = signal<AircraftInfoDto[]>([]);
  _aircraftService = inject(AircraftService);

  constructor() {
    this.loadAircrafts();
  }

  async loadAircrafts() {
    const aircrafts = await this._aircraftService.loadAircraftInfos();
    this._aircrafts.set(aircrafts);
  }
}
