import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  static isBeingShown: boolean = false;
  onOverlayChanged: Subject<boolean> = new Subject<boolean>();

  toggle() {
    OverlayService.isBeingShown = !OverlayService.isBeingShown;

    if (document.body.classList.contains('overlay-shown')) {
      document.body.classList.remove('overlay-shown');
    } else {
      document.body.classList.add('overlay-shown');
    }
  }

  isVisible() {
    return OverlayService.isBeingShown;
  }

  constructor() { }
}
