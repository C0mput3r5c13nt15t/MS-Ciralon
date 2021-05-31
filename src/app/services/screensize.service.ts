import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreensizeService {
  private isDesktop = new BehaviorSubject<boolean>(false);

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Changes the page layout based on resize events
   *
   * @param size Contains the new size of the page
   */
  onResize(size) {
    if (size < 600) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
  }

  /**
   * Gives back an observable that describes if the page should use the desktop or the moblie layout
   *
   * @returns Observable<boolean>
   */
  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
