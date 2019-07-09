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
  mechanic = '';
  pvpName = 'Trainer Battle';
  podInfo: any; // type Pod
  podTitle = '';

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private ts: TournamentsService) { }

  ngOnInit() {
    const tournamentId = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const podId = Number.parseInt(this.activatedRoute.snapshot.params['podId']);
    // ToDo: move required fields to a lower hierarchy component
    this.form = this.fb.group({
      mechanic: new FormControl(),
      podChallenge: new FormControl('')
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
            console.log(tournament)
            challengeName = tournament.name;

            if (tournament.pods.length > 0) {
              podInfo = tournament.pods && tournament.pods[0];
            } else {
              podInfo = { mechanic: tournament.mechanic}
            }
          }
        });

        if (!!podInfo) {
          this.form.patchValue({
            mechanic: podInfo.mechanic,
            podChallenge: ''
          });

          this.podTitle = challengeName;
        }
      });
    }
  }

  get podDivisionName() {
    return this.podInfo && this.podInfo.name || this.podTitle || this.form.get('podChallenge').value;
  }

  get isMechanicTypeAvailable() {
    return this.form.get('mechanic').value === '' && (!this.podInfo || !this.podInfo.mechanic);
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
}
