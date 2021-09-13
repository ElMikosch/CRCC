import { Component, OnInit } from '@angular/core';
import { getAllStats } from 'src/app/data/stats';
import { Stat } from 'src/app/models/stat';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'crcc-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  private maximumPoints: number = 62;

  allStats: Stat[];
  remainingPoints: number = 0;
  spendPoints: number = 0;
  maximumReached: boolean = false;

  constructor(private playerData: PlayerDataService) {
    this.allStats = getAllStats();
    this.calculateDerivedStats(this.allStats);
    this.playerData.stats$.subscribe(this.calculatePoints.bind(this));
    this.playerData.stats$.subscribe((x) => console.log(x));
    this.playerData.stats$.next(this.allStats);
  }

  ngOnInit(): void {}

  calculatePoints(stats: Stat[]) {
    this.spendPoints = stats
      .filter((x) => !x.isDerived)
      .map((x) => x.value)
      .reduce((a, b) => a + b, 0);
    this.remainingPoints = this.maximumPoints - this.spendPoints;
    if (this.remainingPoints == 0) {
      this.maximumReached = true;
    } else {
      this.maximumReached = false;
    }

    this.calculateDerivedStats(stats);
  }

  calculateDerivedStats(stats: Stat[]) {
    //hard code for hp and hum 💩
    let currentHP = stats.find((x) => x.shortName == 'HP');
    let currentHUM = stats.find((x) => x.shortName == 'HUM');
    const currentBODY = stats.find((x) => x.shortName == 'BODY');
    const currentWILL = stats.find((x) => x.shortName == 'WILL');
    const currentEMP = stats.find((x) => x.shortName == 'EMP');

    if (currentHP && currentBODY && currentWILL) {
      currentHP.value = currentHP.derivedCalculation(
        currentBODY.value,
        currentWILL.value
      );
    }

    if (currentHUM && currentEMP) {
      currentHUM.value = currentHUM.derivedCalculation(currentEMP.value);
    }
  }
}
