import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ds-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input('Button');
  type = input<'primary' | 'secondary'>('primary');
  disabled = input(false);
  tap = output<Event>();
}

