import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'app-skill-input',
  templateUrl: './skill-input.component.html',
  styleUrls: ['./skill-input.component.scss'],
})
export class SkillInputComponent implements OnInit {
  @Input() skill!: Skill;
  @Input() allSkillMaximumReached: boolean = false;

  currentValue: number = 0;
  minimumReached: boolean = true;
  maximumReached: boolean = false;

  private skillMaximum = 6;

  constructor(private playerData: PlayerDataService) {}

  ngOnInit(): void {
    if (this.skill.Minimum) {
      this.currentValue = this.skill.Minimum;
    }

    this.updatePlayerData();
  }

  add() {
    if (this.currentValue < this.skillMaximum) {
      this.currentValue++;
      this.updatePlayerData();
    }
  }

  subtract() {
    if (this.currentValue > (this.skill.Minimum || 0)) {
      this.currentValue--;
      this.updatePlayerData();
    }
  }

  updatePlayerData() {
    var currentPlayerData = this.playerData.skills$.value;
    var currentCategory = currentPlayerData.find((x) =>
      x.Skills.find((x) => x.Name_EN == this.skill.Name_EN)
    );
    var currentPlayerSkill = currentCategory?.Skills.find(
      (x) => x.Name_EN == this.skill.Name_EN
    );
    if (currentPlayerSkill) {
      currentPlayerSkill.Value = this.currentValue;
      this.playerData.skills$.next(currentPlayerData);
    }

    if (this.currentValue == (this.skill.Minimum || 0))
      this.minimumReached = true;
    else this.minimumReached = false;

    if (this.currentValue == this.skillMaximum) this.maximumReached = true;
    else this.maximumReached = false;
  }
}
