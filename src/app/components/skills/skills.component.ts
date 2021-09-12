import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { getAllSkills } from 'src/app/data/skills';
import { Skill, SkillCategory } from 'src/app/models/skill';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[];
  private maximumPoints: number = 86;
  remainingPoints: number = 0;
  spendPoints: number = 0;
  maximumReached: boolean = false;

  constructor(private playerData: PlayerDataService) {
    this.skillCategories = getAllSkills();
    this.playerData.skills$.subscribe(this.calculatePoints.bind(this));
    this.playerData.skills$.next(this.skillCategories);
  }

  ngOnInit(): void { }

  getStatValueForSkill(skill: Skill): Observable<number> {
    return this.playerData.stats$.pipe(
      map((x) => x.filter((x) => x.shortName == skill.Stat)[0].value),
      shareReplay(1)
    );
  }

  calculatePoints(skills: SkillCategory[]) {
    this.spendPoints = 0;
    skills.forEach((x) => {
      let spendPointsForCategory = x.Skills.map(
        (x) => (x.Value || 0) * x.CostFactor
      ).reduce((a, b) => a + b, 0);
      this.spendPoints += spendPointsForCategory;
    });

    this.remainingPoints = this.maximumPoints - this.spendPoints;
    if (this.remainingPoints == 0) {
      this.maximumReached = true;
    } else {
      this.maximumReached = false;
    }
  }
}
