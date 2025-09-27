import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Shell } from "@flight42/shared-ui-design-system-blocks";
import { AppMenu, AppMenuItem } from "@flight42/shared-ui-design-system-elements";
import { provideIcons } from '@ng-icons/core';
import { matFlightTakeoff, matManageSearch } from '@ng-icons/material-icons/baseline';

@Component({
  imports: [Shell, AppMenu, AppMenuItem, RouterOutlet, RouterLink],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [ provideIcons({ matManageSearch, matFlightTakeoff }) ],
})
export class App {
  protected title = 'flight';
}
