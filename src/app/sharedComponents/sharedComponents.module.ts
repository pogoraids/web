import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrHeaderComponent } from './pgr-header/pgr-header.component';
import { PgrLeftMenuComponent } from './pgr-left-menu/pgr-left-menu.component';
import { PgrOverlayComponent } from './pgr-overlay/pgr-overlay.component';
import { PgrTournamentCardComponent } from './pgr-tournament-card/pgr-tournament-card.component';
import { PgrCarouselComponent } from './pgr-carousel/pgr-carousel.component';
import { NgbCarouselModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PgrHeaderComponent, PgrLeftMenuComponent, PgrOverlayComponent, PgrTournamentCardComponent, PgrCarouselComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbTabsetModule
  ],
  exports: [
    PgrHeaderComponent, 
    PgrLeftMenuComponent, 
    PgrOverlayComponent, 
    PgrTournamentCardComponent, 
    PgrCarouselComponent,
    NgbCarouselModule,
    NgbTabsetModule
  ]
})
export class SharedComponentsModule { }
