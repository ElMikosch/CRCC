import { MeleeWeapon } from '../models/melee-weapon';

export function getAllMeleeWeapons(): MeleeWeapon[] {
  return [
    {
      Name: 'Light Melee Weapon',
      Examples: 'Combat Knife, Tomahawk',
      NumberOfHandsRequired: 'Varies by type',
      Damage: '1d6',
      RateOfFire: 2,
      CanBeConcealed: true,
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Medium Melee Weapon',
      Examples: 'Baseball Bat, Crowbar, Machete',
      NumberOfHandsRequired: 'Varies by type',
      Damage: '2d6',
      RateOfFire: 2,
      CanBeConcealed: false,
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Heavy Melee Weapon',
      Examples: 'Lead Pipe, Sword, Spiked Bat',
      NumberOfHandsRequired: 'Varies by type',
      Damage: '3d6',
      RateOfFire: 2,
      CanBeConcealed: false,
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Very Heavy Melee Weapon',
      Examples: 'Chainsaw, Sledgehammer, Helicopter Blades, Naginata',
      NumberOfHandsRequired: 'Varies by type',
      Damage: '4d6',
      RateOfFire: 1,
      CanBeConcealed: false,
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
  ];
}
