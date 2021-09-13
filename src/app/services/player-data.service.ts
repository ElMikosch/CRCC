import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { getAllRoles } from '../data/roles';
import { Ammunition } from '../models/ammunition';
import { Armor } from '../models/armor';
import { CyberwareCategory } from '../models/cyberware';
import { Gear } from '../models/gear';
import { MeleeWeapon } from '../models/melee-weapon';
import { RangedWeapon } from '../models/ranged-weapon';
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
  public meleeWeapons$ = new BehaviorSubject<MeleeWeapon[]>([]);
  public rangedWeapons$ = new BehaviorSubject<RangedWeapon[]>([]);
  public ammunition$ = new BehaviorSubject<Ammunition[]>([]);
  public armor$ = new BehaviorSubject<Armor[]>([]);
  public gear$ = new BehaviorSubject<Gear[]>([]);
  public cyberware$ = new BehaviorSubject<CyberwareCategory[]>([]);
  public spendMoney$ = new BehaviorSubject<number>(0);
  public spendHUM$ = new BehaviorSubject<number>(0);

  constructor() {
    combineLatest([
      this.meleeWeapons$,
      this.rangedWeapons$,
      this.ammunition$,
      this.armor$,
      this.gear$,
      this.cyberware$,
    ]).subscribe(
      ([meleeWeapons, rangedWeapons, ammunition, armor, gear, cyberware]) => {
        let totalCost =
          meleeWeapons
            .map((x) => x.Cost * (x.Amount || 0))
            .reduce((acc, value) => acc + value, 0) +
          rangedWeapons
            .map((x) => x.Cost * (x.Amount || 0))
            .reduce((acc, value) => acc + value, 0) +
          ammunition
            .map((x) => (x.Cost * (x.Amount || 0)) / 10)
            .reduce((acc, value) => acc + value, 0) +
          armor
            .map((x) => x.Cost * (x.Amount || 0))
            .reduce((acc, value) => acc + value, 0) +
          gear
            .map((x) => x.Cost * (x.Amount || 0))
            .reduce((acc, value) => acc + value, 0) +
          cyberware
            .map((x) =>
              x.Cyberware.map((x) => x.Cost * (x.Amount || 0)).reduce(
                (acc, value) => acc + value,
                0
              )
            )
            .reduce((acc, value) => acc + value, 0);

        this.spendMoney$.next(totalCost);
      }
    );
  }
}
