import { Component, input, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'ds-app-bar-action',
  standalone: true,
  imports: [NgIcon],
  styles: `
    .app-bar-action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .app-bar-action:hover {
      background-color: var(--primary-color-light);
    }
    .app-bar-action:active {
      background-color: var(--secondary-color-light);
    }
  `,
  template: `
  <div class="app-bar-action">
    <ng-icon size="30px" [name]="iconName()" (click)="tap.emit($event)"/>
  </div>
  `
})
export class AppBarAction {
  iconName = input('');
  tap = output<Event>();
}
