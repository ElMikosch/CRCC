export interface Cyberware {
  Name: string;
  Name_DE: string;
  Install: string;
  DescriptionAndData: string;
  Description_DE: string;
  CostDescription: string;
  Cost: number;
  HL: string;
  Amount?: number;
}

export interface CyberwareCategory {
  Name: string;
  Cyberware: Cyberware[];
}
