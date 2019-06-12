import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrHeaderComponent } from './pgr-header/pgr-header.component';
import { PgrLeftMenuComponent } from './pgr-left-menu/pgr-left-menu.component';
import { PgrOverlayComponent } from './pgr-overlay/pgr-overlay.component';
import { PgrTournamentCardComponent } from './pgr-tournament-card/pgr-tournament-card.component';
import { PgrCarouselComponent } from './pgr-carousel/pgr-carousel.component';
import { NgbCarouselModule, NgbTabsetModule, NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PgrMediaOutletComponent } from './pgr-media-outlet/pgr-media-outlet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PgrHeaderComponent, PgrLeftMenuComponent, PgrOverlayComponent, PgrTournamentCardComponent, PgrCarouselComponent, PgrMediaOutletComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTypeaheadModule
  ],
  exports: [
    PgrHeaderComponent, 
    PgrLeftMenuComponent, 
    PgrOverlayComponent, 
    PgrTournamentCardComponent, 
    PgrCarouselComponent,
    PgrMediaOutletComponent,
    NgbCarouselModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
