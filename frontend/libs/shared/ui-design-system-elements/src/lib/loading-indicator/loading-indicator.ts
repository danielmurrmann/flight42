import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-loading-indicator',
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.css',
})
export class LoadingIndicator {
  /** Whether the loading indicator shows the loading animation */
  showLoading = input(false);
}
