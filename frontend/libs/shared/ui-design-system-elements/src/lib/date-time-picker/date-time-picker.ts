import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-date-time-picker',
  imports: [FormsModule],
  templateUrl: './date-time-picker.html',
  styleUrl: './date-time-picker.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DateTimePicker, multi: true }
  ]
})
export class DateTimePicker implements ControlValueAccessor {
  private _onChangedFn: ((value: unknown) => void) | undefined;
  private _onTouchedFn: (() => void) | undefined;

  _value = signal('');
  _disabled = signal(false);

  /** The name of the control within the angular form object model */
  name = input('');
  /** The label */
  label = input('');
  /** An optional error hint */
  errorHint = input('');
  /** The type of the picker */
  type = input<'datetime-local' | 'date' | 'time'>('datetime-local');

  writeValue(obj: unknown): void {
    this._value.set(obj as string);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this._onChangedFn = fn; 
  }

  registerOnTouched(fn: () => void): void {
    this._onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled.set(isDisabled);
  }

  _onBlur() {
    this._onTouchedFn?.();
  }

  _onChanged(newValue: string) {
    this._value.set(newValue);
    this._onChangedFn?.(newValue);
  }
}
