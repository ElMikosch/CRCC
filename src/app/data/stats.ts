import { Stat } from "../models/stat";

export function getAllStats(): Stat[] {
    return [
        {
            name: "Intelligence",
            shortName: "INT",
            description: "How generally bright you are. As a rule, this is more than sheer intelligence, but also includes cleverness, awareness, perception, and your ability to learn.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Willpower",
            shortName: "WILL",
            description: "Your determination and ability to face danger and/or stress. This STAT also represents your courage and ability to survive longterm privation. This STAT is important for determining how much damage you can take.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Cool",
            shortName: "COOL",
            description: "Your ability to impress and influence people through your character and charisma; how well you get along with others; how you interact in social situations.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Empathy",
            shortName: "EMP",
            description: "Your ability to relate to and care for others, and take others into consideration. Particularly important as it offsets the effects of cyberpsychosis, a dangerous mental illness common in the Dark Future.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Technique",
            shortName: "TECH",
            description: "Your ability to manipulate tools or instruments. This is not the same as Reflexes, inasmuch as this covers the knack of using tools. One Character might have a high Technique but might not be able to fence or juggle. On the other hand, another might have high Reflexes, but might not be able to rewire a computer or hot-wire a car.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Reflexes",
            shortName: "REF",
            description: "Your response time and coordination, as used in aiming, throwing, juggling, etc. A stage magician, for example, would have a high Reflex STAT. Most importantly, this is the STAT that affects your ability to hit things with ranged weapons.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Luck",
            shortName: "LUCK",
            description: "How the gods of chance see you. With a high enough Luck, you can tip the scales in your favor. In a game mechanics sense, you can apply points from this STAT to offset die rolls in your favor. However, this pool of points only refills at the beginning of the next session.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Body",
            shortName: "BODY",
            description: "Your size, toughness, and ability to stay alive and conscious due to physical mass, structure, or other qualities. This STAT is important for determining how much damage you can take.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Dexterity",
            shortName: "DEX",
            description: "Your overall physical competence, as it pertains to balancing, leaping, jumping, combat, and other athletic activities. A gymnast would have a high Dexterity. Most importantly, this is the STAT that affects your ability to hit things with melee weapons and can help you dodge attacks",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Movement",
            shortName: "MOVE",
            description: "Your speed of movement: running, leaping, swimming, etc.",
            isDerived: false,
            derivedCalculation: (stat1: number, stat2: number) => 0,
            value: 2,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Hit Points",
            shortName: "HP",
            description: "Hit Points are what we count to tell if your Character is dead, or still just bleeding on the floor.",
            isDerived: true,
            derivedCalculation: (stat1: number, stat2: number) => {
                stat2 = stat2 || 0;
                var avgStat = Math.ceil((stat1 + stat2) / 2);
                return 10 + (5 * avgStat);
            },
            value: 0,
            minValue: 2,
            maxValue: 8
        },
        {
            name: "Humanity",
            shortName: "HUM",
            description: "Humanity is a measure of how well you interact with the world and other people in it. People with very low Humanity STATs have a lot of problems in human interactions. They may become sociopathic, withdrawn, disassociated, or even homicidal. If your Character's HUM drops below zero, that represents the death of your Character's emotional life; they slide into a state called cyberpsychosis, in which aberrant traits like homicidal mania, or mental disassociation can occur.",
            isDerived: true,
            derivedCalculation: (stat1: number, stat2: number) => stat1 * 10,
            value: 0,
            minValue: 2,
            maxValue: 8
        },
    ];
}
