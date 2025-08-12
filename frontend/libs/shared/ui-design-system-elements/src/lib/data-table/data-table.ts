import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChildren, InjectionToken, input, model, output, Signal, TemplateRef } from '@angular/core';

export interface DataTableItem {
  label: Signal<string>;
  _template: Signal<TemplateRef<unknown>>;
}

export const DS_DATA_TABLE_ITEM = new InjectionToken<DataTableItem>('DsDataTableItem');

@Component({
  selector: 'ds-data-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css'
})
export class DataTable {
  dataSource = input<unknown[]>();
  /** The currently selected dataset */
  selectedDataset = model<unknown|null>(null);
  /** Whether selection is enabled */
  selectionEnabled = input<boolean>(false);
  /** Event emitted when a dataset is tapped */
  datasetTap = output<unknown>();

  _items = contentChildren(DS_DATA_TABLE_ITEM);

  _onRowTap(rowData: unknown) {
    if (this.selectionEnabled()) {
      this.selectedDataset.set(rowData);
    }
  }
}
