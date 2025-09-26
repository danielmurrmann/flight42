import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-app-menu',
  imports: [],
  templateUrl: './app-menu.html',
  styleUrl: './app-menu.css',
})
export class AppMenu {
  /** The title of the app */
  appTitle = input('');
}
