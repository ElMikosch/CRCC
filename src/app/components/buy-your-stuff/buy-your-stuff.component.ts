import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'app-buy-your-stuff',
  templateUrl: './buy-your-stuff.component.html',
  styleUrls: ['./buy-your-stuff.component.scss'],
})
export class BuyYourStuffComponent implements OnInit {
  budget$!: Observable<number>;
  humanity$!: Observable<number>;

  constructor(private playerData: PlayerDataService) {
    this.humanity$ = combineLatest([
      playerData.stats$.pipe(
        map((x) => x.find((x) => x.shortName === 'HUM')?.value || 0)
      ),
      this.playerData.spendHUM$,
    ]).pipe(map(([max, spend]) => max - spend));

    this.budget$ = this.playerData.spendMoney$.pipe(
      map((spend) => Constants.MAXBUDGET - spend)
    );
  }

  ngOnInit(): void {}
}

export namespace Constants {
  export const MAXBUDGET = 2550;
}
