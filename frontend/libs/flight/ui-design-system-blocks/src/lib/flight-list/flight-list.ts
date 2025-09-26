import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FlightInfoDto } from '@flight42/flight-domain';
import { DataTable, DataTableDateItem, DataTableStringItem, DataTableSuccessItem } from "@flight42/shared-ui-design-system-elements";

@Component({
  selector: 'ds-flight-list',
  imports: [CommonModule, DataTable, DataTableStringItem, DataTableDateItem, DataTableSuccessItem],
  templateUrl: './flight-list.html',
  styleUrl: './flight-list.css',
})
export class FlightList {
  /** The data source */
  data = input<FlightInfoDto[]>([]);
  /** Event emitted when a flight is selected */
  flightSelected = output<FlightInfoDto>();

  _onFlightSelected($event: unknown) {
    this.flightSelected.emit($event as FlightInfoDto);
  }
}
