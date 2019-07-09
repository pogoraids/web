import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgr-home',
  templateUrl: './pgr-home.component.html',
  styleUrls: ['./pgr-home.component.css']
})
export class PgrHomeComponent implements OnInit {
  slides = [{ image: `https://picsum.photos/1600/200?random&t=${Math.random()}&blur` }, { image: `https://picsum.photos/900/200?random&t=${Math.random()}` }, { image: `https://picsum.photos/900/200?random&t=${Math.random()}`, title: 'Title 1', body: 'Lorem ipsum sit dolor amet' }];

  tournaments = [{
    id: 1,
    name: 'Raid Speed runs',
    multiPod: true,
    timeOrder: true,
    showAdd: true,
    tallMode: true,
    order: 'DESC',
    limit: 5,
    headers: [
      {title: 'Player'},
      {title: 'Fast', hide: true},
      {title: 'Cinematic', hide: true},
      {title: 'Mark'},
      {title: 'Link'}
    ],
    pods: [
      {
        id: 1,
        name: 'Scyther',
        hide: ['fast', 'cinematic'],
        mechanic: 'PvE',
        submissions: [
          {id: 1, username: 'yourcalcprof', fast: '', cinematic: '', mark: 50, link: 'https://youtu.be/'},
          {id: 2, username: 'NetTools', fast: '', cinematic: '', mark: 70, link: 'https://youtu.be/'},
          {id: 3, username: 'chapotrap9876', fast: '', cinematic: '', mark: 85, link: 'https://youtu.be/'},
          {id: 4, username: 'drsp', fast: '', cinematic: '', mark: 12, link: 'https://youtu.be/'},
          {id: 5, username: 'ChristiLouLou', fast: '', cinematic: '', mark: 66, link: 'https://youtu.be/'},
          {id: 6, username: 'PokeTrnrSpark', fast: '', cinematic: '', mark: 34, link: 'https://youtu.be/'},
          {id: 7, username: 'stangill', fast: '', cinematic: '', mark: 51, link: 'https://youtu.be/'}
        ]
      },
      {
        id: 2,
        name: 'Gengar',
        mechanic: 'PvE',
        submissions: [
          {id: 8, username: 'yourcalcprof', fast: '', cinematic: '', mark: 50, link: 'https://youtu.be/'},
          {id: 9, username: 'yourcalcprof', fast: '', cinematic: '', mark: 70, link: 'https://youtu.be/'},
          {id: 10, username: 'yourcalcprof', fast: '', cinematic: '', mark: 85, link: 'https://youtu.be/'},          
        ]
      }
    ]
  }, {
    id: 3,
    name: 'Ongoing Competitions',
    multiPod: false,
    items: [{
      id: 1,
      title: 'V6 PokeDraft',
      tournamentId: 4,
      tournamentMechanic: 'PvE'
    }, {
      id: 2,
      title: 'PvP Draft',
      tournamentId: 2,
      tournamentMechanic: 'PvP'
    }, {
      id: 3,
      title: 'Dodge Charger',
      tournamentId: 3,
      tournamentMechanic: 'PvE'
    }, {
      id: 4,
      title: 'WQ Scorecard',
      tournamentId: 4,
      tournamentMechanic: 'PvE'
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
