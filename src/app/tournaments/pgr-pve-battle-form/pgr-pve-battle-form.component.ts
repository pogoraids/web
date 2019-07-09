import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TournamentsService } from '../tournaments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgr-pve-battle-form',
  templateUrl: './pgr-pve-battle-form.component.html',
  styleUrls: ['./pgr-pve-battle-form.component.scss']
})
export class PgrPveBattleFormComponent implements OnInit {
  @Input() currentForm: FormGroup;
  @Input() podInfo: any;

  pveName = 'Raid';
  teamsList: string[] = [
    'Multi-team',
    'Mystic',
    'Valor',
    'Instinct'
  ];
  selectedTeam = '';
  playerQtyPlurals = ['Solo', 'Duo', 'Trio', 'Quad', 'Multi (5+)'];
  availablePodsList = ['Scyther', 'Gengar', 'Tyranitar'];
  availableFastAttacksList = ['Acid', 'Confusion', 'Thundershock'];
  availableCinematicAttacksList = ['Doom Desire', 'Origin Pulse', 'Precipice Blades', 'Zap Cannon'];
  weatherConditions = ['Sunny/Clear', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Snowy', 'Windy', 'Foggy'];
  videoLinkHelp = 'YouTube, Streamable, Vimeo, other';
  scoringType: 'timeRun';
  customFieldsTexts = {
    attacker: 'Attacker',
    fastAttacker: 'Attacker Fast',
    cinematicAttacker: 'Attacker Cinematic',
    simLink: 'Simulation Link (PokeBattler.com)',
    remainingHP: 'Attacker\'s Remaining HP'
  };

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

  customFieldsPreload = {
    attacker: this.searchPodChallenge,
    fastAttacker: this.searchFastAttacks,
    cinematicAttacker: this.searchCinematicAttacks
  };

  customScoringTypeModel = {};
  onlySolo = false;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
    private ts: TournamentsService) { }

  ngOnInit() {
    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);

    this.currentForm.setControl('playerNames', this.fb.array([this.fb.group({ player: new FormControl('') })]));
    this.currentForm.setControl('scoringMark', new FormControl(''));
    this.currentForm.setControl('fastAttack', new FormControl());
    this.currentForm.setControl('cinematicAttack', new FormControl(''));
    this.currentForm.setControl('environmentConditions', new FormControl(''));
    this.currentForm.setControl('boostedAttackers', new FormControl(''));
    this.currentForm.setControl('videoLink', new FormControl(''));
    // });
    console.log(this.podInfo)
    if (!!this.podInfo) {
      console.log(this.podInfo);
    } else if (!!tournamentId) {
      this.ts.allPods(null).subscribe(pods => {
        let podInfo;

        pods.forEach(tournament => {
          if (tournament.id === tournamentId) {
            podInfo = tournament;
          }
        });

        this.scoringType = podInfo.scoringType;
        this.onlySolo = podInfo.onlySolo;

        if (podInfo.scoringType === 'custom') {
          this.customScoringTypeModel = podInfo.customScoringModel;

          if ((<any>this.customScoringTypeModel).fields) {
            (<any>this.customScoringTypeModel).fields.forEach((field) => {
              this.currentForm.setControl(field.name, new FormControl());
            });
          }
        }
      });
    }
  }

  get playerNames() {
    return this.currentForm.get('playerNames') as FormArray;
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

  get isPodChallengeAvailable() {
    return !this.podInfo || !this.podInfo.name;
  }

}
