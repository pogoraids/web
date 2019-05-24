import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pgr-left-menu',
  templateUrl: './pgr-left-menu.component.html',
  styleUrls: ['./pgr-left-menu.component.scss']
})
export class PgrLeftMenuComponent implements OnInit {
  @Input() showing: boolean;
  menuOptions = [
    { label: 'Home', hidden: true, icon: 'oi oi-home' },
    {
      label: 'Competitions', children: [
        {
          label: 'PokeDraft v6', children: [
            { label: 'Scores' },
            { label: 'Divisions' }
          ], icon: 'oi'
        },
        {
          label: 'PokeDraft v7', children: [
            { label: 'Scores' },
            { label: 'Divisions' }
          ], icon: 'oi', collapsed: true
        },
        {
          label: 'PvPDraft', children: [
            { label: 'Scores' },
            { label: 'Pods' }
          ], icon: 'oi', collapsed: true
        },
        {
          label: 'PvPDraft v2', children: [
            { label: 'Register' },
            { label: 'Rules' }
          ], icon: 'oi', collapsed: true
        },
      ]
    },
    {
      label: 'Leaderboards', children: [
        { label: 'Speed Raids', link: '/go/to/raids', icon: 'oi' },
        { label: 'WQ Scorecard', link: '/go/to/wq', icon: 'oi' },
        { label: 'ELO Scoreboard', link: '/go/to/elo/pvp', icon: 'oi' }
      ], collapsed: true
    },
    { label: 'Discord', link: 'discord.gg/pogoraids', icon: 'oi' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
