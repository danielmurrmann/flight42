import { Component, input, TemplateRef, viewChild } from '@angular/core';
import { DataTableItem, DS_DATA_TABLE_ITEM } from './data-table';

@Component({
  selector: 'ds-data-table-string-item',
  standalone: true,
  providers: [{provide: DS_DATA_TABLE_ITEM, useExisting: DataTableStringItem}],
  template: `
  <ng-template #template let-rowData>
    {{rowData[key()]}}
  </ng-template>
  `
})
export class DataTableStringItem implements DataTableItem {
  label = input('');
  key = input('');
  _template = viewChild.required<TemplateRef<unknown>>('template');
}
