import { Component, input, model } from '@angular/core';
import { Control, form, FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ds-date-time-picker',
  imports: [Control],
  templateUrl: './date-time-picker.html',
  styleUrl: './date-time-picker.css'
})
export class DateTimePicker implements FormValueControl<string> {

  /** The current value of the control */
  value = model('');
  /** The name of the control within the angular form object model */
  name = input('');
  /** The label */
  label = input('');
  /** An optional error hint */
  errorHint = input('');
  /** The type of the picker */
  type = input<'datetime-local' | 'date' | 'time'>('datetime-local');

   _field = form(this.value);
}
