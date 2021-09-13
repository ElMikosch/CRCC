import { Component, OnInit } from '@angular/core';
import { getAllRangedWeapons } from 'src/app/data/ranged-weapons';
import { RangedWeapon } from 'src/app/models/ranged-weapon';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-ranged-weapons-table',
  templateUrl: './ranged-weapons-table.component.html',
  styleUrls: ['./ranged-weapons-table.component.scss'],
})
export class RangedWeaponsTableComponent implements OnInit {
  rangedWeapons = getAllRangedWeapons();

  displayedColumns: string[] = [
    'Name',
    'WeaponSkill',
    'NumberOfHandsRequired',
    'SingleShotDamage',
    'StandardMagazine',
    'RateOfFire',
    'CostDescription',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.rangedWeapons.forEach((x) => (x.Amount = 0));
  }

  ngOnInit(): void {}

  getTotalCost() {
    return this.rangedWeapons
      .map((x) => x.Cost * (x.Amount || 0))
      .reduce((acc, value) => acc + value, 0);
  }

  updatePlayerData() {
    var rw = this.rangedWeapons.filter((x) => x.Amount && x.Amount > 0);
    this.playerData.rangedWeapons$.next(rw);
  }

  canAfford(weapon: RangedWeapon, amount: number) {
    let currentWeaponValue = weapon.Cost * (weapon.Amount || 0);
    return (
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      weapon.Cost * amount
    );
  }
}
