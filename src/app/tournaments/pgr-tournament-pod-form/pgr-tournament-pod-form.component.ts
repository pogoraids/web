import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentsService } from '../tournaments.service';

@Component({
  selector: 'app-pgr-tournament-pod-form',
  templateUrl: './pgr-tournament-pod-form.component.html',
  styleUrls: ['./pgr-tournament-pod-form.component.scss']
})
export class PgrTournamentPodFormComponent implements OnInit {
  form: FormGroup;
  teamsList: string[] = [
    'Multi-team',
    'Mystic',
    'Valor',
    'Instinct'
  ];
  selectedTeam = '';
  mechanic = '';
  playerQtyPlurals = ['Solo', 'Duo', 'Trio', 'Quad', 'Multi (5+)'];
  pveName = 'Raid';
  pvpName = 'Trainer Battle';
  availablePodsList = ['Scyther', 'Gengar', 'Tyranitar'];
  availableFastAttacksList = ['Acid', 'Confusion', 'Thundershock'];
  availableCinematicAttacksList = ['Doom Desire', 'Origin Pulse', 'Precipice Blades', 'Zap Cannon'];
  weatherConditions = ['Sunny/Clear', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Snowy', 'Windy', 'Foggy'];

  podInfo: any; // type Pod

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private ts: TournamentsService) { }

  ngOnInit() {
    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const podId = Number.parseInt(this.activatedRoute.snapshot.params['podId']);
    // ToDo: move required fields to a lower hierarchy component
    this.form = this.fb.group({
      playerNames: this.fb.array([this.fb.group({ player: new FormControl('') })]),
      mechanic: new FormControl(),
      versus: new FormControl(''/*, [Validators.required]*/),
      podChallenge: new FormControl(''),
      scoringMark: new FormControl(''),
      fastAttack: new FormControl(),
      cinematicAttack: new FormControl(''),
      environmentConditions: new FormControl(''),
      boostedAttackers: new FormControl(''),
      videoLink: new FormControl('')
    });

    this.form.valueChanges.subscribe(value => {
      // Handle this?
    });

    if (!!podId && !!tournamentId) {
      this.ts.allPods({ podId }).subscribe(pods => {
        // Manual filter for demo purposes
        pods.forEach(tournament => {
          if (tournament.id === tournamentId) {
            tournament.pods.forEach(pod => {
              if (pod.id === podId) {
                this.podInfo = pod;
              }
            });
          }
        });
      });

      if (!!this.podInfo) {
        this.form.patchValue({
          mechanic: this.podInfo.mechanic,
          podChallenge: this.podInfo.name
        });
      }
    } else if (!!tournamentId) {
      this.ts.allPods({ podId }).subscribe(pods => {
        let podInfo;
        let challengeName;
        // Manual filter for demo purposes
        pods.forEach(tournament => {
          if (tournament.id === tournamentId) {
            challengeName = tournament.name;
            podInfo = tournament.pods && tournament.pods[0];
          }
        });

        if (!!podInfo) {
          this.form.patchValue({
            mechanic: podInfo.mechanic,
            podChallenge: challengeName
          });
        }
      });
    }
  }

  get podDivisionName() {
    return this.podInfo && this.podInfo.name || this.form.get('podChallenge').value;
  }

  get isMechanicTypeAvailable() {
    return this.form.get('mechanic').value === '' && (!this.podInfo || !this.podInfo.mechanic);
  }

  get isPodChallengeAvailable() {
    return !this.podInfo || !this.podInfo.name;
  }

  get playerNames() {
    return this.form.get('playerNames') as FormArray;
  }

  get updatedMechanic() {
    return this.form.get('mechanic').value;
  }

  setMechanic(event) {
    this.form.get('mechanic').patchValue(event.target.value);
  }

  isPvP() {
    return this.updatedMechanic === 'PvP';
  }

  isPvE() {
    return this.updatedMechanic === 'PvE';
  }

  addAnotherPlayer() {
    this.playerNames.push(this.fb.group({ player: '' }));
  }

  get PvESubmissionTitle() {
    return `${this.PvEPlayerQty} ${this.pveName}`;
  }

  get PvEPlayerQty() {
    return this.playerNames.controls.length >= 5 && this.playerQtyPlurals[4] || this.playerQtyPlurals[this.playerNames.controls.length - 1];
  }

  get scoringMarkLabel() {
    return 'Time mark';
  }

  savePodRecord(event) {
    console.log(event);

    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const podId = Number.parseInt(this.activatedRoute.snapshot.params['podId']);
    let redirect;

    if (!!tournamentId && !!podId) {
      redirect = ['/tournaments', tournamentId, 'pod', podId];
    } else if (!!tournamentId) {
      redirect = ['/tournaments', tournamentId];
    } else {
      redirect = ['/'];
    }

    if (this.form.valid) {
      console.log('valid', this.form.value);

      if (!!redirect) {
        this.router.navigate(redirect);
      }
    } else {
      console.log(this.form.value);
    }
  }

  searchPodChallenge = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.availablePodsList.filter(elem => elem.toLowerCase().indexOf(term.toLowerCase()) !== -1).slice(0, 10)));

  searchFastAttacks = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.availableFastAttacksList.filter(elem => elem.toLowerCase().indexOf(term.toLowerCase()) !== -1).slice(0, 10)));

  searchCinematicAttacks = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.availableCinematicAttacksList.filter(elem => elem.toLowerCase().indexOf(term.toLowerCase()) !== -1).slice(0, 10)));
}
