import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pgr-tournament-card',
  templateUrl: './pgr-tournament-card.component.html',
  styleUrls: ['./pgr-tournament-card.component.scss']
})
export class PgrTournamentCardComponent implements OnInit {
  @Input() data: any; // Tournament

  constructor() { }

  ngOnInit() {
  }

  openTournament(id) {
    console.log('navigate to tournament id')
  }

  newSubmission(id) {
    console.log('navigate to submission form for tournament');
  }
}
