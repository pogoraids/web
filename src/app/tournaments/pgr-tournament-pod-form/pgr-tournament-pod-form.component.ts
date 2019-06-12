import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      playerNames: this.fb.array([this.fb.group({ player: '' })], [Validators.required]),
      mechanic: new FormControl(),
      versus: new FormControl()
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
}
