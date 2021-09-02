import { Component, OnInit } from '@angular/core';
import { getAllGeneralLifePathOptions, getLifePathOptionForType } from 'src/app/data/life-path';
import { LifePathOptionType } from 'src/app/models/life-path';

@Component({
  selector: 'crcc-life-path',
  templateUrl: './life-path.component.html',
  styleUrls: ['./life-path.component.scss']
})
export class LifePathComponent implements OnInit {

  regionOptions = getLifePathOptionForType(LifePathOptionType.CulturalRegion);

  allOptions = getAllGeneralLifePathOptions();

  constructor() { }

  ngOnInit(): void {
  }

}
