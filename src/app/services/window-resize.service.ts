import { Injectable, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WindowResizeService {
  window = typeof window !== 'undefined' ? window : null;
  private resizeSub!: Subscription;
  width = signal<number>(0);
  isMobile = signal<boolean>(false);

  constructor() {
    if (this.window) {
      this.width.set(this.window?.innerWidth ?? 0);
      this.isMobile.set(
        (this.window?.innerWidth && this.window?.innerWidth < 768) || false
      );
      this.resizeSub = fromEvent(this.window, 'resize')
        .pipe(debounceTime(100))
        .subscribe(() => {
          this.width.set(this.window?.innerWidth ?? 0);
          this.isMobile.set(
            (this.window?.innerWidth && this.window?.innerWidth < 768) || false
          );
        });
    }
  }

  getWidth() {
    return this.width;
  }

  getIsMobile() {
    return this.isMobile;
  }

  ngOnDestroy() {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }
}
