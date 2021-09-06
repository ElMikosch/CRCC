import { Component, OnInit } from '@angular/core';
import { getAllSkills, SkillCategory } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillCategories: SkillCategory[] = getAllSkills();

  constructor() { }

  ngOnInit(): void {
  }

}
