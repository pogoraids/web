import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      playerNames: this.fb.array([this.fb.group({ player: '' })], [Validators.required]),
      mechanic: new FormControl(),
      versus: new FormControl(),
      podChallenge: new FormControl('', [Validators.required]),
      scoringMark: new FormControl(),
      fastAttack: new FormControl(),
      cinematicAttack: new FormControl(),
      environmentConditions: new FormControl(),
      boostedAttackers: new FormControl(),
      videoLink: new FormControl()
    });

    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
    // patchValue with the mechanic type from parent pod/division
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
