export interface Stat {
    name: string;
    shortName: string;
    description: string;
    value: number;
    isDerived: boolean;
    minValue: number;
    maxValue: number;
    derivedCalculation(stat1: number, stat2?: number): number;
}