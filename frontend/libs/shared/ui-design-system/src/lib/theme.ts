import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private document = inject(DOCUMENT);

  resetTheme() {
    const themeClasses: string[] = [];
    this.document.body.classList.forEach((c: string) => {
      if (c.startsWith('theme-')) themeClasses.push(c);
    });
    themeClasses.forEach(c => this.document.body.classList.remove(c));
  }

  setTheme(theme: string) {
    this.resetTheme();
    this.document.body.classList.add(`theme-${theme}`);
  }
}
