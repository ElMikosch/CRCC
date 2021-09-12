export interface Skill {
    CostFactor: number;
    Name_EN: string;
    Name_DE: string;
    Description_EN: string;
    Description_DE: string;
    Stat: string;
    Value?: number;
    Minimum?: number;
}

export interface SkillCategory {
    Name_EN: string;
    Name_DE: string;
    Skills: Skill[];
}