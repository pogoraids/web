import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-pgr-tournament-pod',
  templateUrl: './pgr-tournament-pod.component.html',
  styleUrls: ['./pgr-tournament-pod.component.css']
})
export class PgrTournamentPodComponent implements OnInit {
  tournamentList = [];

  tournament = null;

  constructor(private activatedRoute: ActivatedRoute, private ts: TournamentsService) { }

  ngOnInit() {
    const isTournament = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const isPod = Number.parseInt(this.activatedRoute.snapshot.params['podId']);

    if (!this.activatedRoute.snapshot.data['tournaments']) {
      this.ts.allPods({}).subscribe(pods => {
        this.tournamentList = pods;

        if (!!isTournament) {
          let tourney = this.tournamentList.find((elem, value) => {
            return elem.id === isTournament;
          });

          if (!!tourney) {
            this.tournament = (<Array<any>>tourney.pods).find(eachPod => {
              return eachPod.id === isPod;
            });
            this.tournament.parentId = isTournament;
          }
        }
      });
    }
  }

}
