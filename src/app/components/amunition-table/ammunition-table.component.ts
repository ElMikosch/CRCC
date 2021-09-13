import { Component, OnInit } from '@angular/core';
import { getAllAmmunition } from 'src/app/data/ammunition';
import { Ammunition } from 'src/app/models/ammunition';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-ammunition-table',
  templateUrl: './ammunition-table.component.html',
  styleUrls: ['./ammunition-table.component.scss'],
})
export class AmmunitionTableComponent implements OnInit {
  ammunition = getAllAmmunition();

  displayedColumns: string[] = [
    'Name',
    'Description',
    'AmmoTypesAvailable',
    'CostDescription',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.ammunition.forEach((x) => (x.Amount = 0));
  }

  ngOnInit(): void {}

  getTotalCost() {
    return this.ammunition
      .map((x) => (x.Cost * (x.Amount || 0)) / 10)
      .reduce((acc, value) => acc + value, 0);
  }

  updatePlayerData() {
    var a = this.ammunition.filter((x) => x.Amount && x.Amount > 0);
    this.playerData.ammunition$.next(a);
  }

  canAfford(ammunition: Ammunition, amount: number) {
    let currentWeaponValue = ammunition.Cost * (ammunition.Amount || 0);
    return (
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      ammunition.Cost * amount
    );
  }
}
