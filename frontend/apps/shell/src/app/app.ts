import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { Shell } from "@flight42/shared-ui-design-system-blocks";
import { AppMenu, AppMenuItem } from "@flight42/shared-ui-design-system-elements";
import { provideIcons } from '@ng-icons/core';
import { matFlight, matFlightTakeoff, matManageSearch } from '@ng-icons/material-icons/baseline';

@Component({
  imports: [RouterModule, Shell, AppMenu, AppMenuItem, RouterLink],
  selector: 'app-root',
  templateUrl: './app.html',
  viewProviders: [ provideIcons({ matManageSearch, matFlightTakeoff, matFlight }) ]
})
export class App {
}
