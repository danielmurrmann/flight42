import { Component, input, TemplateRef, viewChild } from '@angular/core';
import { DataTableItem, DS_DATA_TABLE_ITEM } from './data-table';

@Component({
  selector: 'ds-data-table-success-item',
  standalone: true,
  providers: [{provide: DS_DATA_TABLE_ITEM, useExisting: DataTableSuccessItem}],
  styles: `
    .indicator {
      width: 12px;
      height: 12px;
    }
    .indicator.success {
      background-color: var(--success-color);
    }
    .indicator.error {
      background-color: var(--error-color);
    }
  `,
  template: `
  <ng-template #template let-rowData>
    @if(invertValue() ? !rowData[key()] : rowData[key()]) {
      <div class="indicator success"></div>
    } @else {
      <div class="indicator error"></div>
    }
  </ng-template>
  `
})
export class DataTableSuccessItem implements DataTableItem {
  label = input('');
  key = input('');
  invertValue = input(false);
  _template = viewChild.required<TemplateRef<unknown>>('template');
}
