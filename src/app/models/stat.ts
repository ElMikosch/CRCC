export interface Stat {
    name: string;
    name_DE: string;
    shortName: string;
    description: string;
    description_DE: string;
    value: number;
    isDerived: boolean;
    minValue: number;
    maxValue: number;
    derivedCalculation(stat1: number, stat2?: number): number;
}