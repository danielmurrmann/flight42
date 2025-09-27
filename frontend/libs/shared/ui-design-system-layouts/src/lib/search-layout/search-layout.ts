import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBar, AppBarItem, LoadingIndicator } from "@flight42/shared-ui-design-system-elements";
import { provideIcons } from '@ng-icons/core';
import { matRestorePageOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'ds-search-layout',
  imports: [CommonModule, AppBar, LoadingIndicator],
  templateUrl: './search-layout.html',
  styleUrl: './search-layout.css',
  viewProviders: [
    provideIcons({ matRestorePageOutline })
  ]
})
export class SearchLayout {
  title = input('');
  showLoading = input(false);
  resetPage = output<void>();

  _appBarItems = signal<AppBarItem[]>([
    { type: 'action', iconName: 'matRestorePageOutline', tap: () => this.resetPage.emit() }
  ]);
}
