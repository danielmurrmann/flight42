import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-text-box',
  imports: [FormsModule],
  templateUrl: './text-box.html',
  styleUrl: './text-box.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TextBox, multi: true }
  ]
})
export class TextBox implements ControlValueAccessor {
  private _onChangedFn: ((value: unknown) => void) | undefined;
  private _onTouchedFn: (() => void) | undefined;

  _value = signal('');
  _disabled = signal(false);

  name = input('');
  label = input('');
  errorHint = input('');

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
