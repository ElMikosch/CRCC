import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill, SkillCategory } from '../models/skill';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  public stats$ = new BehaviorSubject<Stat[]>([]);
  public skills$ = new BehaviorSubject<SkillCategory[]>([]);

  constructor() { }
}
