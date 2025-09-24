import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBar } from "@flight42/shared-ui-design-system-elements";

@Component({
  selector: 'ds-base-layout',
  imports: [CommonModule, AppBar],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css',
})
export class BaseLayout {
  title = input('');
}
