import { Component, OnInit } from '@angular/core';
import { getAllMeleeWeapons } from 'src/app/data/melee-weapons';

@Component({
  selector: 'app-buy-your-stuff',
  templateUrl: './buy-your-stuff.component.html',
  styleUrls: ['./buy-your-stuff.component.scss']
})
export class BuyYourStuffComponent implements OnInit {

  meleeWeapons = getAllMeleeWeapons();
  displayedColumns: string[] = ['name', "examples", "numberOfHands", "damage", "rateOfFire", "cost"];


  constructor() { }

  ngOnInit(): void {
  }

}
// {
//   "Name": "Light Melee Weapon",
//     "Examples": "Combat Knife, Tomahawk",
//       "NumberOfHandsRequired": "Varies by type",
//         "Damage": "1d6",
//           "RateOfFire": 2,
//             "CanBeConcealed": true,
//               "CostDescription": "50eb (Costly)",
//                 "Cost": 50
// },