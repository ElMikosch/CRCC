import { Component, OnInit } from '@angular/core';
import { getAllMeleeWeapons } from 'src/app/data/melee-weapons';
import { MeleeWeapon } from 'src/app/models/melee-weapon';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-melee-weapons-table',
  templateUrl: './melee-weapons-table.component.html',
  styleUrls: ['./melee-weapons-table.component.scss'],
})
export class MeleeWeaponsTableComponent implements OnInit {
  meleeWeapons = getAllMeleeWeapons();

  displayedColumns: string[] = [
    'name',
    'examples',
    'numberOfHands',
    'damage',
    'rateOfFire',
    'cost',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.meleeWeapons.forEach((x) => (x.Amount = 0));
  }

  ngOnInit(): void {}

  getTotalCost() {
    return this.meleeWeapons
      .map((x) => x.Cost * (x.Amount || 0))
      .reduce((acc, value) => acc + value, 0);
  }

  updatePlayerData() {
    var mw = this.meleeWeapons.filter((x) => x.Amount && x.Amount > 0);
    this.playerData.meleeWeapons$.next(mw);
  }

  canAfford(weapon: MeleeWeapon, amount: number) {
    let currentWeaponValue = weapon.Cost * (weapon.Amount || 0);
    return (
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      weapon.Cost * amount
    );
  }
}
