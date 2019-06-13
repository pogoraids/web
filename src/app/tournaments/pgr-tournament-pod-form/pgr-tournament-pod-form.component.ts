import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private ts: TournamentsService) { }

  ngOnInit() {
    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const podId = Number.parseInt(this.activatedRoute.snapshot.params['podId']);

    this.form = this.fb.group({
      playerNames: this.fb.array([this.fb.group({ player: new FormControl('', [Validators.required]) })]),
      mechanic: new FormControl(),
      versus: new FormControl(''/*, [Validators.required]*/),
      podChallenge: new FormControl('', [Validators.required]),
      scoringMark: new FormControl('', [Validators.required]),
      fastAttack: new FormControl(),
      cinematicAttack: new FormControl('', [Validators.required]),
      environmentConditions: new FormControl('', [Validators.required]),
      boostedAttackers: new FormControl('', [Validators.required]),
      videoLink: new FormControl('', [Validators.required])
    });

    this.form.valueChanges.subscribe(value => {
      console.log(value);
    });

    if (!!podId && !!tournamentId) {
      this.ts.allPods({podId}).subscribe(pods => {
        console.log(pods);

        // Manual filter for demo purposes
        pods.forEach(tournament => {
          if (tournament.id == tournamentId) {
            tournament.pods.forEach(pod => {
              if (pod.id === podId) {
                this.podInfo = pod;
              }
            });
          }
        });

        console.log(this.podInfo)
      });

      if (!!this.podInfo) {
        this.form.patchValue({
          mechanic: this.podInfo.mechanic,
          podChallenge: this.podInfo.name
        });
      }
    }
    // patchValue with the mechanic type from parent pod/division
  }
  
  get podDivisionName() {
    return this.podInfo && this.podInfo.name;
  }

  get isMechanicTypeAvailable() {
    return !this.podInfo || !this.podInfo.mechanic;
  }

  get isPodChallengeAvailable() {
    return !this.podInfo || !this.podInfo.name;
  }

  get playerNames() {
    return (<FormArray>this.form.get('playerNames'));
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
    console.log(event)

    if (this.form.valid) {
      console.log('valid', this.form.value)
    } else {
      console.log(this.form.value)
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
