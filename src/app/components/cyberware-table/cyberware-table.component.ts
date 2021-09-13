import { Component, OnInit } from '@angular/core';
import { getAllCyberware } from 'src/app/data/cyberware';
import { Cyberware, CyberwareCategory } from 'src/app/models/cyberware';
import { PlayerDataService } from 'src/app/services/player-data.service';
import { Constants } from '../buy-your-stuff/buy-your-stuff.component';

@Component({
  selector: 'app-cyberware-table',
  templateUrl: './cyberware-table.component.html',
  styleUrls: ['./cyberware-table.component.scss'],
})
export class CyberwareTableComponent implements OnInit {
  cyberware = getAllCyberware();
  displayedColumns: string[] = [
    'Name',
    'DescriptionAndData',
    'HL',
    'Install',
    'CostDescription',
    'buy',
  ];

  constructor(private playerData: PlayerDataService) {
    this.cyberware.forEach((x) => x.Cyberware.forEach((x) => (x.Amount = 0)));
  }

  ngOnInit(): void {}

  getTotalCost(currentCategory: string) {
    var category = this.cyberware.find((x) => x.Name === currentCategory);
    if (category)
      return category.Cyberware.map((x) => x.Cost * (x.Amount || 0)).reduce(
        (acc, value) => acc + value,
        0
      );
    else return 0;
  }

  getTotalHumantiyCost(currentCategory: string) {
    var category = this.cyberware.find((x) => x.Name === currentCategory);
    if (category)
      return category.Cyberware.map(
        (x) => parseInt(x.HL) * (x.Amount || 0)
      ).reduce((acc, value) => acc + value, 0);
    else return 0;
  }

  updatePlayerData() {
    let spendHUM = 0;
    var boughtCC: CyberwareCategory[] = [];
    this.cyberware.forEach((x) => {
      var boughtCyberware = x.Cyberware.filter((x) => x.Amount && x.Amount > 0);
      if (boughtCyberware.length > 0) {
        var cc = { ...x };
        cc.Cyberware = [];
        cc.Cyberware.push(...boughtCyberware);
        boughtCC.push(cc);
        spendHUM += cc.Cyberware.map(
          (x) => parseInt(x.HL) * (x.Amount || 0)
        ).reduce((acc, value) => acc + value, 0);
      }
    });

    this.playerData.spendHUM$.next(spendHUM);
    this.playerData.cyberware$.next(boughtCC);
  }

  canAfford(cyberware: Cyberware, amount: number) {
    let currentHum =
      this.playerData.stats$.value.find((x) => x.shortName === 'HUM')?.value ||
      0;

    let currentHUMValue = parseInt(cyberware.HL) * (cyberware.Amount || 0);
    let canAffordHUM =
      currentHum - this.playerData.spendHUM$.value + currentHUMValue >=
      parseInt(cyberware.HL) * amount;

    let currentWeaponValue = cyberware.Cost * (cyberware.Amount || 0);
    let canAffordMoney =
      Constants.MAXBUDGET -
        this.playerData.spendMoney$.value +
        currentWeaponValue >=
      cyberware.Cost * amount;

    return canAffordHUM && canAffordMoney;
  }
}
