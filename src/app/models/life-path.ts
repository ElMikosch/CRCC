export enum LifePathOptionType {
    CulturalRegion,
    Personality,
    ClothingStyle,
    Hairstyle,
    Affectation,
    ValueMost,
    FeelAboutMostPeople,
    MostValuedPerson,
    MostValuedPossession,
    FamilyBackground,
    ChildhoodEnvironment,
    FamilyCrisis,
    LifeGoals,
    Friend,
    Enemy,
    WhatCausedIt,
    WhatCanTheyThrowAtYou,
    WhatToDoAboutIt,
    TragicLoveAffairs
}

export interface LifePathOption {
    type: LifePathOptionType;
    options: string[];
    header:string;
    additionalInfo?: string[];
    languages?: string[][];
}