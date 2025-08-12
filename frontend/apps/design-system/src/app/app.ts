import { Component, inject } from '@angular/core';
import { Button } from '@flight42/shared-ui-design-system-elements';
import { Theme } from '@flight42/shared-ui-design-system';

@Component({
  imports: [Button],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'design-system playground';
  theme = inject(Theme);
}
