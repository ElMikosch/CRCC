import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/models/stat';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'app-stat-input',
  templateUrl: './stat-input.component.html',
  styleUrls: ['./stat-input.component.scss']
})
export class StatInputComponent implements OnInit {

  @Input() stat!: Stat;
  @Input() allStatMaximumReached: boolean = false;

  minimumReached: boolean = true;
  maximumReached: boolean = false;

  constructor(private playerData: PlayerDataService) {
  }

  ngOnInit(): void {
    this.stat.value = this.stat.minValue;
  }

  add() {
    if (this.stat.value < this.stat.maxValue) {
      this.stat.value++;
      this.updatePlayerData();
    }
  }

  subtract() {
    if (this.stat.value > this.stat.minValue) {
      this.stat.value--;
      this.updatePlayerData();
    }
  }

  updatePlayerData() {
    var currentPlayerData = this.playerData.stats$.value;
    var currentPlayerStat = currentPlayerData.find(x => x.shortName == this.stat.shortName);
    if (currentPlayerStat) {
      currentPlayerStat.value = this.stat.value;
      this.playerData.stats$.next(currentPlayerData);
    }

    if (this.stat.value == this.stat.minValue)
      this.minimumReached = true;
    else
      this.minimumReached = false;

    if (this.stat.value == this.stat.maxValue)
      this.maximumReached = true;
    else
      this.maximumReached = false;
  }

}
