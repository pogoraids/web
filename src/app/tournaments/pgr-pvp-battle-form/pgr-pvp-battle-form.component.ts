import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TournamentsService } from '../tournaments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgr-pvp-battle-form',
  templateUrl: './pgr-pvp-battle-form.component.html',
  styleUrls: ['./pgr-pvp-battle-form.component.scss']
})
export class PgrPvpBattleFormComponent implements OnInit {
  @Input() currentForm: FormGroup;
  tournament: any;
  scoringDataResults = [];
  videoLinksHelp = 'If you have any recordings from your battles (specially to resolve any disputes), please provide them on each line of this field.';

  constructor(private ts: TournamentsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const podId = Number.parseInt(this.activatedRoute.snapshot.params['podId']);

    if (!!podId && !!tournamentId) {
      this.ts.allPods({ podId }).subscribe(pods => {
        // Manual filter for demo purposes
        pods.forEach(tournament => {
          if (tournament.id === tournamentId) {
            tournament.pods.forEach(pod => {
              if (pod.id === podId) {
                this.tournament = pod;
                this.scoringDataResults = Array(pod.scoringData.matches);
              }
            });
          }
        });
      });
    } else if (!!tournamentId) {
      this.ts.allPods({ podId }).subscribe(pods => {
        let podInfo;
        let challengeName;
        // Manual filter for demo purposes
        pods.forEach(tournament => {
          if (tournament.id === tournamentId) {
            challengeName = tournament.name;
            this.tournament = tournament;
            this.scoringDataResults = Array(tournament.scoringData.matches);
          }
        });
      });

      this.currentForm.setControl('podId', new FormControl('', [Validators.required]));
    }

    if (!this.currentForm.get('playerName')) {
      this.currentForm.setControl('playerName', new FormControl('', [Validators.required]));
    }

    this.currentForm.setControl('versus', new FormControl('', [Validators.required]));

  }

  searchPlayerName = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.tournament.members.map(member => member.username)
          .filter(elem =>
            elem && (elem.toLowerCase().indexOf(term.toLowerCase()) !== -1) &&
            (elem.toLowerCase() !== this.currentForm.get('versus').value.toLowerCase()))));

  searchVersusName = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.tournament.members.map(member => member.username)
          .filter(elem =>
            elem && (elem.toLowerCase().indexOf(term.toLowerCase()) !== -1) &&
            (elem.toLowerCase() !== this.currentForm.get('playerName').value.toLowerCase()))));

  save(index, result) {
    this.scoringDataResults[index] = result;
  }

  allScoresInformed() {
    return this.scoringDataResults.filter(match => !!match).length === this.tournament.scoringData.matches;
  }

  reset() {
    this.currentForm.patchValue({
      playerName: '',
      versus: '',
      podId: null
    });
    this.scoringDataResults = Array(this.tournament.scoringData.matches);
  }
}
