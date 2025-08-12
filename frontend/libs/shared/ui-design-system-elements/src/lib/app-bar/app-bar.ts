import { Component, input } from '@angular/core';
import { AppBarAction } from './app-bar-action';

export interface AppBarActionConfig {
  type: 'action',
  iconName: string,
  tap: (args: any) => void
}

export type AppBarItem = AppBarActionConfig;

@Component({
  selector: 'ds-app-bar',
  imports: [AppBarAction],
  templateUrl: './app-bar.html',
  styleUrl: './app-bar.css'
})
export class AppBar {
  title = input('');
  items = input<AppBarItem[]>([]);
}
