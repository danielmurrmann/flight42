import { Component, input, linkedSignal, model, output, viewChild } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { FlightCriteriaDto, initialFlightCriteriaDto } from '@flight42/flight-domain';
import { TextBox, Button } from "@flight42/shared-ui-design-system-elements";
import { combineLatest, debounceTime, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'ds-flight-criteria',
  imports: [TextBox, Button, FormsModule],
  templateUrl: './flight-criteria.html',
  styleUrl: './flight-criteria.css',
})
export class FlightCriteria {
  /** The flight search criteria to show */
  criteria = input(initialFlightCriteriaDto);
  /** Event emitted when the user clicks on the search button */
  searchFlights = output<FlightCriteriaDto>();
  /** Whether to automatically search when the criteria changes */
  autoSearch = input(false);

  _from = linkedSignal(() => this.criteria().from);
  _to = linkedSignal(() => this.criteria().to);

  _form = viewChild.required<NgForm>('form');

  _from$ = toObservable(this._from);
  _to$ = toObservable(this._to);

  autoSearchTrigger$ = combineLatest([this._from$, this._to$])
    .pipe(
      filter(() => this.autoSearch()),
      distinctUntilChanged(), 
      debounceTime(600),
      filter(() => this._form().valid ?? false),
      map(([from, to]) => ({ from, to })
    )
  );

  _autoSearchSubscription = this.autoSearchTrigger$.subscribe(criteria => {
    this.searchFlights.emit(criteria);
  });

  _onSearch() {
    this.searchFlights.emit({ from: this._from(), to: this._to() });
  }
}
