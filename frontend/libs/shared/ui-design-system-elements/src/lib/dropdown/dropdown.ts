import { Component, ElementRef, input, model, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ds-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown implements FormValueControl<unknown> {
  value = model<unknown>(undefined);

  label = input('');

  choices = input<unknown[]>([]);
  valueKey = input('');
  displayKey = input('');

  _selectElement = viewChild.required<ElementRef<HTMLSelectElement>>('select');

  _onChange() {
    this.value.set(this._selectElement().nativeElement.value);
  }
}
