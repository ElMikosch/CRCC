import { Component, OnInit } from '@angular/core';
import { getAllGear } from 'src/app/data/gear';
import { Gear } from 'src/app/models/gear';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-gear-table',
  templateUrl: './gear-table.component.html',
  styleUrls: ['./gear-table.component.scss'],
})
export class GearTableComponent implements OnInit {
  gear = getAllGear();

  displayedColumns: string[] = [
    'Name',
    'Description',
    'CostDescription',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.gear.forEach((x) => (x.Amount = 0));
  }

  ngOnInit(): void {}

  getTotalCost() {
    return this.gear
      .map((x) => x.Cost * (x.Amount || 0))
      .reduce((acc, value) => acc + value, 0);
  }

  updatePlayerData() {
    var g = this.gear.filter((x) => x.Amount && x.Amount > 0);
    this.playerData.gear$.next(g);
  }

  canAfford(ammunition: Gear, amount: number) {
    let currentWeaponValue = ammunition.Cost * (ammunition.Amount || 0);
    return (
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      ammunition.Cost * amount
    );
  }
}
