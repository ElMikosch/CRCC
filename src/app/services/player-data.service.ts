import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getAllRoles } from '../data/roles';
import { Role } from '../models/role';
import { SkillCategory } from '../models/skill';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  public name$ = new BehaviorSubject<string>('');
  public role$ = new BehaviorSubject<Role>(getAllRoles()[0]);
  public stats$ = new BehaviorSubject<Stat[]>([]);
  public skills$ = new BehaviorSubject<SkillCategory[]>([]);

  constructor() {}
}
