import { LifePathOption, LifePathOptionType } from "../models/life-path";

export function getAllGeneralLifePathOptions(): LifePathOption[]{
    return [
        {
            type: LifePathOptionType.CulturalRegion,
            options: [
                "North American",
                "South/Central American",
                "Western European",
                "Eastern European",
                "Middle Eastern/North African",
                "Sub-Saharan African",
                "South Asian",
                "South East Asian",
                "East Asian",
                "Oceania/Pacific Islander",
            ],
            languages: [
                ["Chinese", "Cree", "Creole", "English", "French", "Navajo", "Spanish"],
                ["Creole", "English", "German", "Guarani", "Mayan", "Portuguese", "Quechua", "Spanish"],
                ["Dutch", "English", "French", "German", "Italian", "Norwegian", "Portuguese", "Spanish"],
                ["English", "Finnish", "Polish", "Romanian", "Russian", "Ukrainian"],
                ["Arabic", "Berber", "English", "Farsi", "French", "Hebrew", "Turkish"],
                ["Arabic", "English", "French", "Hausa", "Lingala", "Oromo", "Portuguese", "Swahili", "Twi", "Yoruba"],
                ["Bengali", "Dari", "English", "Hindi", "Nepali", "Sinhalese", "Tamil", "Urdu"],
                ["Arabic", "Burmese", "English", "Filipino", "Hindi", "Indonesian", "Khmer", "Malayan", "Vietnamese"],
                ["Cantonese Chinese", "English", "Japanese", "Korean", "Mandarin Chinese", "Mongolian"],
                ["English", "French", "Hawaiian", "Maori", "Pama-Nyungan", "Tahitian"],
            ],
            header: "Your (General) Cultural Region / Languages You Might Know"
        },
        {
            type: LifePathOptionType.Personality,
            options: [
                "Shy and secretive",
                "Rebellious, antisocial, and violent",
                "Arrogant, proud, and aloof",
                "Moody, rash, and headstrong",
                "Picky, fussy, and nervous",
                "Stable and serious",
                "Silly and fluff-headed",
                "Sneaky and deceptive",
                "Intellectual and detached",
                "Friendly and outgoing",
            ],
            header: "What Are You Like?"
        },
        {
            type: LifePathOptionType.ClothingStyle,
            options: [
                "Generic Chic (Standard, Colorful, Modular)",
                "Leisurewear (Comfort, Agility, Athleticism)",
                "Urban Flash (Flashy, Technological, Streetwear)",
                "Businesswear (Leadership, Presence, Authority)",
                "High Fashion (Exclusive, Designer, Couture)",
                "Bohemian (Folksy, Retro, Free-spirited)",
                "Bag Lady Chic (Homeless, Ragged, Vagrant)",
                "Gang Colors (Dangerous, Violent, Rebellious)",
                "Nomad Leathers (Western, Rugged, Tribal)",
                "Asia Pop (Bright, Costume-like, Youthful)",
            ],
            header: "Clothing Style"
        },
        {
            type: LifePathOptionType.Hairstyle,
            options: [
                "Mohawk",
                "Long and ratty",
                "Short and spiked",
                "Wild and all over",
                "Bald",
                "Striped",
                "Wild colors",
                "Neat and short",
                "Short and curly",
                "Long and straight",
            ],
            header: "Hairstyle"
        },
        {
            type: LifePathOptionType.Affectation,
            options: [
                "Tattoos",
                "Mirrorshades",
                "Ritual scars",
                "Spiked gloves",
                "Nose rings",
                "Tongue or other piercings",
                "Strange fingernail implants",
                "Spiked boots or heels",
                "Fingerless gloves",
                "Strange contacts",
            ],
            header: "Affectation You Are Never Without"
        },
        {
            type: LifePathOptionType.ValueMost,
            options: [
                "Money",
                "Honor",
                "Your word",
                "Honesty",
                "Knowledge",
                "Vengeance",
                "Love",
                "Power",
                "Family",
                "Friendship",
            ],
            header: "What Do You Value Most?"
        },
        {
            type: LifePathOptionType.FeelAboutMostPeople,
            options: [
                "I stay neutral.",
                "I stay neutral.",
                "I like almost everyone.",
                "I hate almost everyone.",
                "People are tools. Use them for your own goals then discard them.",
                "Every person is a valuable individual.",
                "People are obstacles to be destroyed if they cross me.",
                "People are untrustworthy. Don't depend on anyone.",
                "Wipe ‘em all out and let the cockroaches take over.",
                "People are wonderful!",
            ],
            header: "How Do You Feel About Most People?"
        }, 
        {
            type: LifePathOptionType.MostValuedPerson,
            options: [
                "A parent",
                "A brother or sister",
                "A lover",
                "A friend",
                "Yourself",
                "A pet",
                "A teacher or mentor",
                "A public figure",
                "A personal hero",
                "No one",
            ],
            header: "Most Valued Person in Your Life?"
        },
        {
            type: LifePathOptionType.MostValuedPossession,
            options: [
                "A weapon",
                "A tool",
                "A piece of clothing",
                "A photograph",
                "A book or diary",
                "A recording",
                "A musical instrument",
                "A piece of jewelry",
                "A toy",
                "A toy",
            ],
            header: "Most Valued Possession You Own?"
        },
        {
            type: LifePathOptionType.FamilyBackground,
            options: [
                "Corporate Execs",
                "Corporate Managers",
                "Corporate Technicians",
                "Nomad Pack",
                "Ganger 'Family'",
                "Combat Zoners",
                "Urban Homeless",
                "Megastructure Warren Rats",
                "Reclaimers",
                "Edgerunners",
            ],
            additionalInfo:[
                "Wealthy, powerful, with servants, luxury homes, and the best of everything. Private security made sure you were always safe. You definitely went to a big-name private school.",
                "Well to do, with large homes, safe neighborhoods, nice cars, etc. Sometimes your parent(s) would hire servants, although this was rare. You had a mix of private and corporate education.",
                "Middle-middle class, with comfortable conapts or Beaverville suburban homes, minivans and corporate-run technical schools. Kind of like living 1950s America crossed with 1984.",
                "You had a mix of rugged trailers, vehicles, and huge road kombis for your home. You learned to drive and fight at an early age, but the family was always there to care for you. Food was actually fresh and abundant. Mostly home schooled.",
                "A savage, violent home in any place the gang could take over. You were usually hungry, cold, and scared. You probably didn't know who your actual parents were. Education? The Gang taught you how to fight, kill, and steal—what else did you need to know?",
                "A step up from a gang 'family,' your home was a decaying building somewhere in the ‘Zone', heavily fortified. You were hungry at times, but regularly could score a bed and a meal. Home schooled.",
                "You lived in cars, dumpsters, or abandoned shipping modules. If you were lucky. You were usually hungry, cold, and scared, unless you were tough enough to fight for the scraps. Education? School of Hard Knocks.",
                "You grew up in one of the huge new megastructures that went up after the War. A tiny conapt, kibble and scop for food, a mostly warm bed. Some better educated adult warren dwellers or a local Corporation may have set up a school.",
                "You started out on the road, but then moved into one of the deserted ghost towns or cities to rebuild it. A pioneer life: dangerous, but with plenty of simple food and a safe place to sleep. You were home schooled if there was anyone who had the time.",
                "Your home was always changing based on your parents' current 'job.' Could be a luxury apartment, an urban conapt, or a dumpster if you were on the run. Food and shelter ran the gamut from gourmet to kibble.",
            ],
            header: "Original Background"
        },
        {
            type: LifePathOptionType.ChildhoodEnvironment,
            options: [
                "Ran on The Street, with no adult supervision.",
                "Spent in a safe Corp Zone walled off from the rest of the City.",
                "In a Nomad pack moving from place to place.",
                "In a Nomad pack with roots in transport (ships, planes, caravans).",
                "In a decaying, once upscale neighborhood, now holding off the boosters to survive.",
                "In the heart of the Combat Zone, living in a wrecked building or other squat.",
                "In a huge 'megastructure' building controlled by a Corp or the City.",
                "In the ruins of a deserted town or city taken over by Reclaimers.",
                "In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people.",
                "In a Corporate luxury 'starscraper,' high above the rest of the teeming rabble.",
            ],
            header: "Childhood Environment"
        },
        {
            type: LifePathOptionType.FamilyCrisis,
            options: [
                "Your family lost everything through betrayal.",
                "Your family lost everything through bad management.",
                "Your family was exiled or otherwise driven from their original home/nation/Corporation.",
                "Your family is imprisoned, and you alone escaped.",
                "Your family vanished. You are the only remaining member.",
                "Your family was killed, and you were the only survivor.",
                "Your family is involved in a long-term conspiracy, organization, or association, such as a crime family or revolutionary group.",
                "Your family was scattered to the winds due to misfortune.",
                "Your family is cursed with a hereditary feud that has lasted for generations.",
                "You are the inheritor of a family debt; you must honor this debt before moving on with your life.",
            ],
            header: "Your Family Crisis"
        },
        {
            type: LifePathOptionType.Friend,
            options: [
                "Like an older sibling to you.",
                "Like a younger sibling to you.",
                "A teacher or mentor.",
                "A partner or coworker.",
                "A former lover.",
                "An old enemy.",
                "Like a parent to you.",
                "An old childhood friend.",
                "Someone you know from The Street.",
                "Someone with a common interest or goal.",
            ],
            header: "Friend's Relationship to You"
        },
        {
            type: LifePathOptionType.Enemy,
            options: [
                "Ex-friend",
                "Ex-lover",
                "Estranged relative",
                "Childhood enemy",
                "Person working for you",
                "Person you work for",
                "Partner or coworker",
                "Corporate exec",
                "Government official",
                "Boosterganger",
            ],
            header: "Enemy"
        },
        {
            type: LifePathOptionType.WhatCausedIt,
            options: [
                "Caused the other to lose face or status.",
                "Caused the loss of lover, friend, or relative",
                "Caused a major public humiliation.",
                "Accused the other of cowardice or some other major personal flaw.",
                "Deserted or betrayed the other.",
                "Turned down the other's offer of a job or romantic involvement.",
                "You just don't like each other.",
                "One of you was a romantic rival.",
                "One of you was a business rival.",
                "One of you set the other up for a crime they didn't commit.",
            ],
            header: "What Caused it? Who's been Wronged?"
        },
        {
            type: LifePathOptionType.WhatCanTheyThrowAtYou,
            options: [
                "Just themselves and even they won't go out of their way.",
                "Just themselves.",
                "Just themselves and a close friend.",
                "Themselves and a few (1d6/2) friends.",
                "Themselves and a few (1d6/2) friends.",
                "An entire gang (at least 1d10 + 5 people).",
                "The local cops or other Lawmen.",
                "A powerful gang lord or small Corporation.",
                "A powerful Corporation.",
                "An entire city or government or agency.",
            ],
            header: "What Can They Throw at You?"
        },
        {
            type: LifePathOptionType.WhatToDoAboutIt,
            options: [
                "Avoid the scum.",
                "Go into a murderous rage and try to physically rip their face off.",
                "Backstab them indirectly.",
                "Verbally attack them.",
                "Set them up for a crime or other transgression they didn't commit.",
                "Set out to murder or maim them.",
            ],
            header: "What are You/They Gonna do About it?"
        },
        {
            type: LifePathOptionType.TragicLoveAffairs,
            options: [
                "Your lover died in an accident.",
                "Your lover mysteriously vanished.",
                "It just didn't work out.",
                "A personal goal or vendetta came between you and your lover.",
                "Your lover was kidnapped.",
                "Your lover went insane or cyberpsycho.",
                "Your lover committed suicide.",
                "Your lover was killed in a fight.",
                "A rival cut you out of the action.",
                "Your lover is imprisoned or exiled.",
            ],
            header: "What Happened?"
        },
        {
            type: LifePathOptionType.TragicLoveAffairs,
            options: [
                "Get rid of a bad reputation.",
                "Gain power and control.",
                "Get off The Street no matter what it takes.",
                "Cause pain and suffering to anyone who crosses you.",
                "Live down your past life and try to forget it.",
                "Hunt down those responsible for your miserable life and make them pay.",
                "Get what's rightfully yours.",
                "Save, if possible, anyone else involved in your background, like a lover, or family member.",
                "Gain fame and recognition.",
                "Become feared and respected.",
            ],
            header: "Life Goals"
        },
    ];
}

export function getLifePathOptionForType(type: LifePathOptionType): LifePathOption{
    let allOptions = getAllGeneralLifePathOptions();
    return allOptions.filter(x => x.type === type)[0];
}