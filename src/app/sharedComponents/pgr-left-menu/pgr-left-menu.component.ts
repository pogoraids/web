import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/services/overlay.service';

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
          ], icon: 'oi oi-globe'
        },
        {
          label: 'PokeDraft v7', children: [
            { label: 'Scores' },
            { label: 'Divisions' }
          ], icon: 'oi oi-globe', collapsed: true
        },
        {
          label: 'PvPDraft', children: [
            { label: 'Scores', link: '/tournaments/2' },
            { label: 'Pods' }
          ], icon: 'oi oi-loop', collapsed: true
        },
        {
          label: 'PvPDraft v2', children: [
            { label: 'Register' },
            { label: 'Rules' }
          ], icon: 'oi oi-loop', collapsed: true
        },
      ], icon: 'oi oi-timer'
    },
    {
      label: 'Leaderboards', children: [
        { label: 'Raid Speed Runs', link: '/tournaments/1', icon: 'oi oi-globe' },
        { label: 'WQ Scorecard', link: '/tournaments/4', icon: 'oi oi-globe' },
        { label: 'ELO Scoreboard', /*link: '/go/to/elo/pvp',*/ icon: 'oi oi-loop' }
      ], icon: 'oi oi-spreadsheet', collapsed: true
    },
    { label: 'Discord', link: 'https://discord.gg/shMmCdN', icon: 'oi oi-people', external: true }
  ];

  constructor(private router: Router, private overlayService: OverlayService) { }

  ngOnInit() {
  }

  clickOption(dataPoint) {
    if (dataPoint.link && !dataPoint.external) {
      this.showing = !this.showing;
      this.overlayService.toggle();
      this.router.navigate([dataPoint.link]);
    } else if (!!dataPoint.external) {
      this.showing = !this.showing;
      this.overlayService.toggle();
      window.open(dataPoint.link, '_blank');
    }

    return false;
  }

}
