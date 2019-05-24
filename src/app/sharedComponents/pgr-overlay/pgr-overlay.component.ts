import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-pgr-overlay',
  templateUrl: './pgr-overlay.component.html',
  styleUrls: ['./pgr-overlay.component.css']
})
export class PgrOverlayComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }
  
  isOverlayShown() {
    return this.overlayService.isVisible();
  }

  toggleOverlaid() {
    this.overlayService.toggle();
    this.overlayService.onOverlayChanged.next(false);
  }

}
