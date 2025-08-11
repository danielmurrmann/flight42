import { Component } from '@angular/core';
import { Button } from '@flight42/shared-ui-design-system-elements';

@Component({
  imports: [Button],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'design-system playground';
}
