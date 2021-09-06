import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-input',
  templateUrl: './skill-input.component.html',
  styleUrls: ['./skill-input.component.scss']
})
export class SkillInputComponent implements OnInit {

  @Input() skill!: Skill;
  currentValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.currentValue++;
  }

  subtract() {
    this.currentValue--;
  }

}
