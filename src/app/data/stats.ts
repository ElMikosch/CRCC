import { Stat } from '../models/stat';

export function getAllStats(): Stat[] {
  return [
    {
      name: 'Intelligence',
      name_DE: 'Intelligenz',
      shortName: 'INT',
      description:
        'How generally bright you are. As a rule, this is more than sheer intelligence, but also includes cleverness, awareness, perception, and your ability to learn.',
      description_DE:
        'Wie intelligent Sie im Allgemeinen sind. Das ist in der Regel mehr als bloße Intelligenz, sondern umfasst auch Klugheit, Aufmerksamkeit, Wahrnehmung und Lernfähigkeit.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Willpower',
      name_DE: 'Willenskraft',
      shortName: 'WILL',
      description:
        'Your determination and ability to face danger and/or stress. This STAT also represents your courage and ability to survive longterm privation. This STAT is important for determining how much damage you can take.',
      description_DE:
        'Ihre Entschlossenheit und Fähigkeit, sich Gefahren und/oder Stress zu stellen. Dieser STAT steht auch für Ihren Mut und Ihre Fähigkeit, langfristige Entbehrungen zu überleben. Dieser STAT ist wichtig, um zu bestimmen, wie viel Schaden Sie ertragen können.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Cool',
      name_DE: 'Cool',
      shortName: 'COOL',
      description:
        'Your ability to impress and influence people through your character and charisma; how well you get along with others; how you interact in social situations.',
      description_DE:
        'Ihre Fähigkeit, Menschen durch Ihren Charakter und Ihr Charisma zu beeindrucken und zu beeinflussen; wie gut Sie mit anderen auskommen; wie Sie in sozialen Situationen interagieren.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Empathy',
      name_DE: 'Einfühlungsvermögen',
      shortName: 'EMP',
      description:
        'Your ability to relate to and care for others, and take others into consideration. Particularly important as it offsets the effects of cyberpsychosis, a dangerous mental illness common in the Dark Future.',
      description_DE:
        'Ihre Fähigkeit, mit anderen in Beziehung zu treten, sich um sie zu kümmern und auf sie Rücksicht zu nehmen. Dies ist besonders wichtig, da es die Auswirkungen der Cyberpsychose ausgleicht, einer gefährlichen Geisteskrankheit, die in der Dunklen Zukunft weit verbreitet ist.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Technique',
      name_DE: 'Technisch',
      shortName: 'TECH',
      description:
        'Your ability to manipulate tools or instruments. This is not the same as Reflexes, inasmuch as this covers the knack of using tools. One Character might have a high Technique but might not be able to fence or juggle. On the other hand, another might have high Reflexes, but might not be able to rewire a computer or hot-wire a car.',
      description_DE:
        'Deine Fähigkeit, Werkzeuge oder Instrumente zu handhaben. Dies ist nicht dasselbe wie Reflexe, da es sich um die Fähigkeit handelt, Werkzeuge zu benutzen. Ein Charakter kann eine hohe Technik haben, aber vielleicht nicht fechten oder jonglieren können. Andererseits kann ein anderer Charakter hohe Reflexe haben, aber vielleicht nicht in der Lage sein, einen Computer neu zu verkabeln oder ein Auto kurzzuschließen.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Reflexes',
      name_DE: 'Reflexes',
      shortName: 'REF',
      description:
        'Your response time and coordination, as used in aiming, throwing, juggling, etc. A stage magician, for example, would have a high Reflex STAT. Most importantly, this is the STAT that affects your ability to hit things with ranged weapons.',
      description_DE:
        'Deine Reaktionszeit und Koordination, wie sie beim Zielen, Werfen, Jonglieren usw. gebraucht wird. Ein Bühnenmagier hätte zum Beispiel einen hohen Reflex-STAT. Vor allem ist dies der STAT, der deine Fähigkeit beeinflusst, Dinge mit Fernkampfwaffen zu treffen.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Luck',
      name_DE: 'Glück',
      shortName: 'LUCK',
      description:
        'How the gods of chance see you. With a high enough Luck, you can tip the scales in your favor. In a game mechanics sense, you can apply points from this STAT to offset die rolls in your favor. However, this pool of points only refills at the beginning of the next session.',
      description_DE:
        'Wie die Götter des Zufalls dich sehen. Mit einer ausreichend hohen Glückszahl kannst du die Waage zu deinen Gunsten kippen. Im Sinne der Spielmechanik kannst du Punkte aus diesem STAT verwenden, um Würfelwürfe zu deinen Gunsten auszugleichen. Allerdings füllt sich dieser Punktepool erst zu Beginn der nächsten Sitzung wieder auf.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Body',
      name_DE: 'Körper',
      shortName: 'BODY',
      description:
        'Your size, toughness, and ability to stay alive and conscious due to physical mass, structure, or other qualities. This STAT is important for determining how much damage you can take.',
      description_DE:
        'Deine Größe, Zähigkeit und Fähigkeit, am Leben und bei Bewusstsein zu bleiben, aufgrund von physischer Masse, Struktur oder anderen Eigenschaften. Dieser STAT ist wichtig, um zu bestimmen, wie viel Schaden du einstecken kannst.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Dexterity',
      name_DE: 'Geschicklichkeit',
      shortName: 'DEX',
      description:
        'Your overall physical competence, as it pertains to balancing, leaping, jumping, combat, and other athletic activities. A gymnast would have a high Dexterity. Most importantly, this is the STAT that affects your ability to hit things with melee weapons and can help you dodge attacks',
      description_DE:
        'Ihre allgemeine körperliche Fähigkeit, zu balancieren, zu hüpfen, zu springen, zu kämpfen und andere sportliche Aktivitäten auszuführen. Ein Turner würde eine hohe Geschicklichkeit haben. Am wichtigsten ist der STAT, der deine Fähigkeit beeinflusst, Dinge mit Nahkampfwaffen zu treffen, und dir hilft, Angriffen auszuweichen.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Movement',
      name_DE: 'Bewegung',
      shortName: 'MOVE',
      description: 'Your speed of movement: running, leaping, swimming, etc.',
      description_DE:
        'Ihre Bewegungsgeschwindigkeit: Laufen, Springen, Schwimmen, usw.',
      isDerived: false,
      derivedCalculation: (stat1: number, stat2: number) => 0,
      value: 2,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Hit Points',
      name_DE: 'Trefferpunkte',
      shortName: 'HP',
      description:
        'Hit Points are what we count to tell if your Character is dead, or still just bleeding on the floor.',
      description_DE:
        'Die Trefferpunkte sind das, was wir zählen, um festzustellen, ob dein Charakter tot ist oder nur noch blutend auf dem Boden liegt.',
      isDerived: true,
      derivedCalculation: (stat1: number, stat2: number) => {
        stat2 = stat2 || 0;
        var avgStat = Math.ceil((stat1 + stat2) / 2);
        return 10 + 5 * avgStat;
      },
      value: 0,
      minValue: 2,
      maxValue: 8,
    },
    {
      name: 'Humanity',
      name_DE: 'Menschlichkeit',
      shortName: 'HUM',
      description:
        "Humanity is a measure of how well you interact with the world and other people in it. People with very low Humanity STATs have a lot of problems in human interactions. They may become sociopathic, withdrawn, disassociated, or even homicidal. If your Character's HUM drops below zero, that represents the death of your Character's emotional life; they slide into a state called cyberpsychosis, in which aberrant traits like homicidal mania, or mental disassociation can occur.",
      description_DE:
        'Menschlichkeit ist ein Maß dafür, wie gut man mit der Welt und anderen Menschen in ihr interagiert. Menschen mit sehr niedrigen Menschlichkeits-Statistiken haben viele Probleme im zwischenmenschlichen Bereich. Sie können soziopathisch, zurückgezogen, distanziert oder sogar gemeingefährlich werden. Wenn der HUM-Wert deines Charakters unter Null fällt, bedeutet das den Tod des Gefühlslebens deines Charakters; er rutscht in einen Zustand, der Cyberpsychose genannt wird und in dem abnorme Eigenschaften wie Mordlust oder mentale Distanzierung auftreten können.',
      isDerived: true,
      derivedCalculation: (stat1: number, stat2: number) => stat1 * 10,
      value: 0,
      minValue: 2,
      maxValue: 8,
    },
  ];
}
