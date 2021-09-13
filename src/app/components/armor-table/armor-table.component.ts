import { Component, OnInit } from '@angular/core';
import { getAllArmor } from 'src/app/data/armor';
import { Armor } from 'src/app/models/armor';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-armor-table',
  templateUrl: './armor-table.component.html',
  styleUrls: ['./armor-table.component.scss'],
})
export class ArmorTableComponent implements OnInit {
  armor = getAllArmor();
  displayedColumns: string[] = [
    'Name',
    'Description',
    'DamageStoppingPower',
    'ArmorPenalty',
    'CostDescription',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.armor.forEach((x) => (x.Amount = 0));
  }

  ngOnInit(): void {}

  getTotalCost() {
    return this.armor
      .map((x) => x.Cost * (x.Amount || 0))
      .reduce((acc, value) => acc + value, 0);
  }

  updatePlayerData() {
    var a = this.armor.filter((x) => x.Amount && x.Amount > 0);
    this.playerData.armor$.next(a);
  }

  canAfford(ammunition: Armor, amount: number) {
    let currentWeaponValue = ammunition.Cost * (ammunition.Amount || 0);
    return (
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      ammunition.Cost * amount
    );
  }
}
