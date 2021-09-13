export interface RangedWeapon {
  Name: string;
  WeaponSkill: string;
  NumberOfHandsRequired: number;
  SingleShotDamage: string;
  StandardMagazine: string;
  RateOfFire: number;
  CanBeConcealed: boolean;
  CostDescription: string;
  Cost: number;
  Amount?: number;
}
