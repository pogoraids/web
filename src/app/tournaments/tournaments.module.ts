import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrTournamentFormComponent } from './pgr-tournament-form/pgr-tournament-form.component';
import { PgrTournamentsAvailableComponent } from './pgr-tournaments-available/pgr-tournaments-available.component';
import { PgrTournamentPodComponent } from './pgr-tournament-pod/pgr-tournament-pod.component';
import { PgrTournamentPodFormComponent } from './pgr-tournament-pod-form/pgr-tournament-pod-form.component';

@NgModule({
  declarations: [PgrTournamentFormComponent, PgrTournamentsAvailableComponent, PgrTournamentPodComponent, PgrTournamentPodFormComponent],
  imports: [
    CommonModule
  ]
})
export class TournamentsModule { }
