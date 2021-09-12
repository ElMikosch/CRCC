import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyable-item',
  templateUrl: './buyable-item.component.html',
  styleUrls: ['./buyable-item.component.scss']
})
export class BuyableItemComponent implements OnInit {
  currentValue: number = 0;
  minimumReached: boolean = true;
  maximumReached: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.currentValue++;
    this.updatePlayerData();
  }

  subtract() {
    if (this.currentValue > 0) {
      this.currentValue--;
      this.updatePlayerData();
    }
  }

  updatePlayerData() {
    if (this.currentValue > 0)
      this.minimumReached = false;
    else
      this.minimumReached = true;
  }

}
