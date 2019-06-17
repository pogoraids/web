import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-pgr-tournaments-available',
  templateUrl: './pgr-tournaments-available.component.html',
  styleUrls: ['./pgr-tournaments-available.component.css']
})
export class PgrTournamentsAvailableComponent implements OnInit {
  tournamentList = [];

  tournament = null;

  constructor(private activatedRoute: ActivatedRoute, private ts: TournamentsService) { }

  ngOnInit() {
    const isTournament = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const isPod = this.activatedRoute.snapshot.params['podId'];

    if (!this.activatedRoute.snapshot.data['tournaments']) {
      this.ts.allPods({}).subscribe(tourneys => {
        this.tournamentList = tourneys;

        if (!!isTournament) {
          this.tournament = tourneys.find((elem, value) => {
            return elem.id === isTournament;
          });
        }
      });
    }
  }

}
