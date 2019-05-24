import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-pgr-header',
  templateUrl: './pgr-header.component.html',
  styleUrls: ['./pgr-header.component.scss']
})
export class PgrHeaderComponent implements OnInit {
  menuIsShowing: boolean;

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayService.onOverlayChanged.subscribe((status) => {
      this.menuIsShowing = status;
    });
  }
  
  toggleMenu() {
    this.overlayService.toggle();
    this.overlayService.onOverlayChanged.next(!this.menuIsShowing);
  }

  clickedOverlay() {

  }

  goToLogin() {}
}
