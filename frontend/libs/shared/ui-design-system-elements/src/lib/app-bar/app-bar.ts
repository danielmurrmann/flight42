import { Component, input } from '@angular/core';
import { AppBarAction } from './app-bar-action';
import { AppBarSearch } from './app-bar-search';

export interface AppBarActionConfig {
  type: 'action',
  iconName: string,
  tap: (args: any) => void
}

export interface AppBarSearchConfig {
  type: 'search',
  placeholder: string,
  executeSearch: (args: string) => void
}

export type AppBarItem = AppBarActionConfig | AppBarSearchConfig;

@Component({
  selector: 'ds-app-bar',
  imports: [AppBarAction, AppBarSearch],
  templateUrl: './app-bar.html',
  styleUrl: './app-bar.css'
})
export class AppBar {
  title = input('');
  items = input<AppBarItem[]>([]);
}
