import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
      playerName: new FormControl('', [Validators.required]),
      mechanic: new FormControl(),
    });
  }

  get updatedMechanic()  {
    return this.form.get('mechanic').value;
  }

  setMechanic(event) {
    this.form.get('mechanic').patchValue(event.target.value);
  }
}
