import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Route, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgr-tournament-card',
  templateUrl: './pgr-tournament-card.component.html',
  styleUrls: ['./pgr-tournament-card.component.scss']
})
export class PgrTournamentCardComponent implements OnInit {
  @Input() data: any; // Tournament
  @Input() fullMode: boolean;
  currentTournamentId = null;
  currentPodId = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentTournamentId = this.activatedRoute.snapshot.params['id'];
    this.currentPodId = this.activatedRoute.snapshot.params['podId'];
  }

  openTournament(id) {
    this.router.navigate(['/tournaments', id]);
    return false;
  }

  openTournamentPod(id, podId) {
    this.router.navigate(['/tournaments', id, 'pod', podId]);
    return false;
  }

  newSubmission(tournamentId) {
    if (!!tournamentId && !(this.currentTournamentId && this.currentPodId)) {
      this.router.navigate(['/tournaments', tournamentId, 'submit']);
    } else if (!!this.currentTournamentId && !!this.currentPodId) {
      this.router.navigate(['/tournaments', this.currentTournamentId, 'pod', this.currentPodId, 'submit']);
    }
  }

  getFilteredSub(categoryId) {
    return this.data && this.data.submissions.filter(each => {
      return each.reviewerTags && each.reviewerTags.lastIndexOf(categoryId) !== -1;
    });
  }

  get baseCategoryName(): string {
    return this.data && this.data.mechanic === 'PvE' && 'Standard' || '';
  }
}
