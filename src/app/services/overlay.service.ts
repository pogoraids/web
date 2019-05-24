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
  }

  isVisible() {
    return OverlayService.isBeingShown;
  }

  constructor() { }
}
