import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrTournamentFormComponent } from './pgr-tournament-form/pgr-tournament-form.component';
import { PgrTournamentsAvailableComponent } from './pgr-tournaments-available/pgr-tournaments-available.component';
import { PgrTournamentPodComponent } from './pgr-tournament-pod/pgr-tournament-pod.component';
import { PgrTournamentPodFormComponent } from './pgr-tournament-pod-form/pgr-tournament-pod-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../sharedComponents/sharedComponents.module';
import { TournamentsService } from './tournaments.service';
import { PgrPvpBattleFormComponent } from './pgr-pvp-battle-form/pgr-pvp-battle-form.component';
import { PgrPveBattleFormComponent } from './pgr-pve-battle-form/pgr-pve-battle-form.component';

const routes: Routes = [
  { path: 'available', component: PgrTournamentsAvailableComponent },
  { path: ':id', component: PgrTournamentsAvailableComponent },
  { path: ':id/submit', component: PgrTournamentPodFormComponent },
  { path: 'new', component: PgrTournamentFormComponent },
  { path: 'edit', component: PgrTournamentFormComponent },
  { path: ':id/pod/:podId', component: PgrTournamentPodComponent },
  { path: ':id/pod/:podId/submit', component: PgrTournamentPodFormComponent }
];

@NgModule({
  imports: [
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: TournamentsService, useClass: TournamentsService }
  ]
})
export class TournamentsRoutingModule { }

@NgModule({
  declarations: [
    PgrTournamentFormComponent,
    PgrTournamentsAvailableComponent,
    PgrTournamentPodComponent,
    PgrTournamentPodFormComponent,
    PgrPvpBattleFormComponent,
    PgrPveBattleFormComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    TournamentsRoutingModule
  ]
})
export class TournamentsModule { }
