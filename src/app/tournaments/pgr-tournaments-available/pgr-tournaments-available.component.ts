import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgr-tournaments-available',
  templateUrl: './pgr-tournaments-available.component.html',
  styleUrls: ['./pgr-tournaments-available.component.css']
})
export class PgrTournamentsAvailableComponent implements OnInit {
  tournamentList = [{
    id: 1,
    name: 'Raid Speed runs',
    multiPod: true,
    timeOrder: true,
    showAdd: true,
    tallMode: true,
    order: 'DESC',
    limit: 5,
    headers: [
      { title: 'Player' },
      { title: 'Fast' },
      { title: 'Cinematic' },
      { title: 'Mark' },
      { title: 'Link' }
    ],
    pods: [
      {
        id: 1,
        name: 'Scyther',
        hide: ['fast', 'cinematic'],
        mechanic: 'PvE',
        submissions: [
          { id: 1, username: 'yourcalcprof', fast: '', cinematic: '', mark: 50, link: 'https://youtu.be/' },
          { id: 2, username: 'NetTools', fast: '', cinematic: '', mark: 70, link: 'https://youtu.be/' },
          { id: 3, username: 'chapotrap9876', fast: '', cinematic: '', mark: 85, link: 'https://youtu.be/' },
          { id: 4, username: 'drsp', fast: '', cinematic: '', mark: 12, link: 'https://youtu.be/' },
          { id: 5, username: 'ChristiLouLou', fast: '', cinematic: '', mark: 66, link: 'https://youtu.be/' },
          { id: 6, username: 'PokeTrnrSpark', fast: '', cinematic: '', mark: 34, link: 'https://youtu.be/' },
          { id: 7, username: 'stangill', fast: '', cinematic: '', mark: 51, link: 'https://youtu.be/' }
        ]
      },
      {
        id: 2,
        name: 'Gengar',
        mechanic: 'PvE',
        submissions: [
          { id: 8, username: 'yourcalcprof', fast: '', cinematic: '', mark: 50, link: 'https://youtu.be/' },
          { id: 9, username: 'yourcalcprof', fast: '', cinematic: '', mark: 70, link: 'https://youtu.be/' },
          { id: 10, username: 'yourcalcprof', fast: '', cinematic: '', mark: 85, link: 'https://youtu.be/' },
        ]
      }
    ]
  }, {
    id: 2,
    name: 'PvP Draft',
    multiPod: true,
    tallMode: true,
    limit: 10,
    pods: [
      {
        id: 3, 
        name: 'Skarmory',
        mechanic: 'PvP',
        submissions: [{
          id: 100,
          username: 'drsp',
          versus: 'IAmTheBlackMetal',
          scoringData: {
            matches: 3,
            result: ['win', 'win', 'lose']
          },
          link: 'http://youtu.be/'
        }, {
          id: 101,
          username: 'vlfph',
          versus: 'IAmTheBlackMetal',
          scoringData: {
            matches: 3,
            result: ['lose', 'win', 'win']
          }
        }]
      },
      {
        id: 4, 
        name: 'Altaria',
        mechanic: 'PvP',
        submissions: [{
          id: 100,
          username: 'drsp',
          versus: 'IAmTheBlackMetal',
          scoringData: {
            matches: 3,
            result: ['win', 'lose', 'lose']
          },
          link: 'http://youtu.be/'
        }, {
          id: 102,
          username: 'drsp',
          versus: 'vlfph',
          scoringData: {
            matches: 3,
            result: ['win', 'lose', 'win']
          },
          link: 'http://youtu.be/'
        }]
      },
      {
        id: 5, 
        name: 'Azumarill',
        mechanic: 'PvP',
        submissions: [{
          id: 100,
          username: 'drsp',
          versus: 'IAmTheBlackMetal',
          scoringData: {
            matches: 3,
            result: ['win', 'win', 'lose']
          },
          link: 'http://youtu.be/'
        }]
      }
    ]
  }];

  tournament = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const isTournament = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    const isPod = this.activatedRoute.snapshot.params['podId'];

    if (!!isTournament) {
      this.tournament = this.tournamentList.find((elem, value) => {
        return elem.id === isTournament;
      });
      console.log(this.tournament)
    }
  }

}
