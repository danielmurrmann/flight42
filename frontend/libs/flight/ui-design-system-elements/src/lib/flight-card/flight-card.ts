import { Component, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Flight, FlightInfoDto, initialFlightInfoDto } from '@flight42/flight-domain';

@Component({
  selector: 'ds-flight-card',
  imports: [DatePipe],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.css',
})
export class FlightCard {
  /** The flight to display */
  flight = input<FlightInfoDto | Flight>(initialFlightInfoDto);

  _flight = computed(() => 'connection' in this.flight() ? this.flight() as Flight : undefined);
  _flightInfo = computed(() => !('connection' in this.flight()) ? this.flight() as FlightInfoDto : undefined);
}
