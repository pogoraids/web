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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  openTournament(id) {
    console.log('navigate to tournament id')
    this.router.navigate(['/tournaments', id]);
  }

  openTournamentPod(id, podId) {
    console.log('navigate to tournament id')
    this.router.navigate(['/tournaments', id, 'pod', podId]);
  }

  newSubmission(id) {
    console.log('navigate to submission form for tournament');
    this.router.navigate(['/tournaments/', id, 'submit']);
  }

  getFilteredSub(categoryId) {
    console.log(categoryId);
    return this.data && this.data.submissions.filter(each => {
      return each.reviewerTags && each.reviewerTags.lastIndexOf(categoryId) !== -1;
    });
  }

  get baseCategoryName(): string {
    return this.data && this.data.mechanic === 'PvE' && 'Standard' || '';
  }
}
