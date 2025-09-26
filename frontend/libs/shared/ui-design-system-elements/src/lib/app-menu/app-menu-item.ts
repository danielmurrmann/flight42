import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'ds-app-menu-item',
  imports: [NgIcon],
  styles: [
    `
      .app-menu-item {
        padding: var(--element-space);
        display: flex;
        align-items: center;
        gap: var(--element-space);
        cursor: pointer;
      }
      .app-menu-item:hover {
        background-color: var(--secondary-color-light);
      }
      .label {
        line-height: 2;
        font-weight: 500;
      }
    `,
  ],
  template: `
    <div class="app-menu-item">
      <ng-icon size="30px" [name]="iconName()" />
      <span class="label">{{ label() }}</span>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMenuItem {
  iconName = input('');
  label = input('');
}
