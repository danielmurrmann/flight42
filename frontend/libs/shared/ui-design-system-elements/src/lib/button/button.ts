import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ds-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  /** The label */
  label = input('Button');
  /** The button type */
  type = input<'primary' | 'secondary'>('primary');
  /** Whether the button is disabled */
  disabled = input(false);
  /** Emitted when the button is tapped */
  tap = output<Event>();
}

