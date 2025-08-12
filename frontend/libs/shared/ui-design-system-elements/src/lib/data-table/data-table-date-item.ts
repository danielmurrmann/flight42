import { DatePipe } from '@angular/common';
import { Component, input, TemplateRef, viewChild } from '@angular/core';
import { DataTableItem, DS_DATA_TABLE_ITEM } from './data-table';

@Component({
  selector: 'ds-data-table-date-item',
  standalone: true,
  imports: [DatePipe],
  providers: [{provide: DS_DATA_TABLE_ITEM, useExisting: DataTableDateItem}],
  template: `
  <ng-template #template let-rowData>
    {{rowData[key()] | date}}
  </ng-template>
  `
})
export class DataTableDateItem implements DataTableItem {
  label = input('');
  key = input('');
  _template = viewChild.required<TemplateRef<unknown>>('template');
}
