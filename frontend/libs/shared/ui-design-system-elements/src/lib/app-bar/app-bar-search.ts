import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../button/button';

@Component({
  selector: 'ds-app-bar-search',
  standalone: true,
  imports: [FormsModule, Button],
  styles: `
    .app-bar-search {
      display: flex;
    }
    .app-bar-search input {
      padding: 5px;
    }
  `,
  template: `
  <div class="app-bar-search">
    <input [(ngModel)]="_currentValue" [placeholder]="placeholder()" >
    <ds-button label="Search" (onTap)="executeSearch.emit(_currentValue())" />
  </div>
  `
})
export class AppBarSearch {
  placeholder = input('');
  executeSearch = output<string>();
  _currentValue = signal('');
}
