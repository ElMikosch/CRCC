export interface Skill {
    CostFactor: number;
    Name_EN: string;
    Name_DE: string;
    Description_EN: string;
    Description_DE: string;
    Stat: string;
    Value?: number;
}

export interface SkillCategory {
    Name_EN: string;
    Name_DE: string;
    Skills: Skill[];
}

export function getAllSkills(): SkillCategory[] {
    return [
        {
            "Name_DE": "Bewusstseinsfähigkeiten",
            "Name_EN": "Awareness Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Concentration",
                    "Name_DE": "Konzentration",
                    "Description_EN": "Skill of focus and mental control, encompassing feats of memory, recall, and physiological control. At a Base 10, you've got a pretty solid memory and can keep your head in a firefight against the local boosters. At a Base 14, you've trained your mind to retain knowledge, and probably meditate regularly. It takes a fair amount to shake you. At a Base 18, your mind is like a steel trap with a 24/7 lock down. You can walk through gunfire and never flinch.",
                    "Description_DE": "Fähigkeit der Konzentration und mentalen Kontrolle, die Gedächtnisleistungen, Erinnerungsvermögen und physiologische Kontrolle umfasst. Mit einem Basiswert von 10 hast du ein ziemlich gutes Gedächtnis und kannst dich in einem Feuergefecht mit den örtlichen Angebern behaupten. Bei einem Basiswert von 14 haben Sie Ihren Verstand darauf trainiert, Wissen zu behalten, und meditieren wahrscheinlich regelmäßig. Es braucht schon einiges, um dich zu erschüttern. Bei einer Base 18 ist Ihr Verstand wie eine Stahlfalle, die rund um die Uhr verschlossen ist. Sie können durch Schüsse hindurchgehen, ohne mit der Wimper zu zucken.",
                    "Stat": "WILL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Conceal/Reveal Object",
                    "Name_DE": "Objekt verbergen/verstecken",
                    "Description_EN": "Skill for hiding objects and finding objects that have been hidden. This is the Skill used for concealing weapons under clothing and detecting concealed weapons. At a Base 10, you've got some experience with street magic and maybe you know a few common hiding places. At a Base 14, you've learned the most common hiding places and can slip small items past customs. Maybe you work as a smuggler or an investigator part-time. At a Base 18, you are seasoned in the art of concealment. It's rare that anything goes unnoticed, and you could smuggle a handgun into President Kress' office.",
                    "Description_DE": "Fertigkeit zum Verstecken von Gegenständen und zum Auffinden von versteckten Gegenständen. Dies ist die Fertigkeit, mit der man Waffen unter der Kleidung verstecken und versteckte Waffen aufspüren kann. Mit einem Basiswert von 10 hast du schon etwas Erfahrung mit Straßenmagie und kennst vielleicht ein paar gängige Verstecke. Mit einem Basiswert von 14 kennst du die gängigsten Verstecke und kannst kleine Gegenstände am Zoll vorbeischmuggeln. Vielleicht arbeitest du nebenbei als Schmuggler oder Ermittler. Mit einer Basis 18 sind Sie in der Kunst des Versteckens geübt. Es ist selten, dass etwas unbemerkt bleibt, und Sie könnten eine Handfeuerwaffe in das Büro von Präsident Kress schmuggeln.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Lip Reading",
                    "Name_DE": "Lippenlesen",
                    "Description_EN": "Skill of reading someone's lips to tell what they're saying. At a Base 10, you've spent enough time snooping on conversations to pick up a few words here and there. At a Base 14, you can read all sorts of people including those with heavy accents and partially obscured mouths. At a Base 18, you could dictate a conversation from 10m/yds away through a snowstorm, with one eye closed.",
                    "Description_DE": "Die Fähigkeit, von den Lippen anderer zu lesen, um zu erkennen, was sie sagen. Mit Base 10 hast du genug Zeit damit verbracht, in Gesprächen zu schnüffeln, um hier und da ein paar Wörter aufzuschnappen. Auf Basis 14 kannst du alle Arten von Menschen lesen, auch solche mit starkem Akzent und teilweise verdeckten Mündern. Mit Base 18 können Sie ein Gespräch aus 10 m Entfernung durch einen Schneesturm diktieren, und zwar mit einem geschlossenen Auge.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Perception",
                    "Name_DE": "Wahrnehmung",
                    "Description_EN": "Skill of spotting hidden things, like clues, traps, and people using the Stealth Skill, but not objects hidden with the Conceal/Reveal Object Skill. At a Base 10, you know how to keep an eye out and your spatial awareness is better than the average person. At a Base 14, you always know roughly what's going on around you and only trained professionals can sneak up on you. At a Base 18, you are trained to scan rooms for traps, you can spot tiny clues like scratches on door knobs, and you can predict who is entering a room by how they turn that knob.",
                    "Description_DE": "Fähigkeit, verborgene Dinge wie Hinweise, Fallen und Personen mit der Fertigkeit \"Schleichen\" zu entdecken, nicht aber Objekte, die mit der Fertigkeit \"Objekt verbergen/verstecken\" versteckt werden. Mit einem Basiswert von 10 weißt du, wie du die Augen offen halten kannst, und dein räumliches Vorstellungsvermögen ist besser als das eines Durchschnittsmenschen. Mit Basis 14 weißt du immer ungefähr, was um dich herum vor sich geht, und nur ausgebildete Profis können sich an dich heranschleichen. Bei einer Base 18 sind Sie darauf trainiert, Räume nach Fallen abzusuchen, Sie erkennen winzige Hinweise wie Kratzer auf Türklinken und können anhand der Art und Weise, wie sie die Klinke drehen, vorhersagen, wer einen Raum betritt.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Tracking",
                    "Name_DE": "Nachverfolgung",
                    "Description_EN": "Skill of following a trail by observing tracks and other clues left behind. At a Base 10, you've done some hunting (whether that's animals or people is up to you). At a Base 14, you could be a professional bounty hunter, with enough knowledge to track people who are actively covering their tracks. At a Base 18, you are almost impossible to shake. Once you get a trail, you can follow it to the ends of the earth.",
                    "Description_DE": "Fähigkeit, einer Spur zu folgen, indem du Spuren und andere Hinweise beobachtest, die du hinterlassen hast. Auf Basis 10 hast du bereits gejagt (ob du dabei Tiere oder Menschen jagst, bleibt dir überlassen). Mit Basis 14 könntest du ein professioneller Kopfgeldjäger sein, der genug Wissen hat, um Menschen aufzuspüren, die aktiv ihre Spuren verwischen. Auf Basis 18 ist es fast unmöglich, Sie abzuschütteln. Sobald Sie eine Spur haben, können Sie ihr bis ans Ende der Welt folgen.",
                    "Stat": "INT"
                }
            ]
        },
        {
            "Name_DE": "Körperliche Fertigkeiten",
            "Name_EN": "Body Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Athletics",
                    "Name_DE": "Leichtathletik",
                    "Description_EN": "Skill of jumping, climbing, throwing, swimming, lifting weights, etc. It combines the basic elements of any high school-level sports program. This Skill also covers thrown weapons. At a Base 10, you are the equivalent of a real high school \"jock,\" able to run long distances and lift a respectable amount. At a Base 14, you can perform in college-level competitions and hold your own in all sorts of athletic challenges. At a Base 18, you are of Olympic or professional caliber and it's rare you meet someone who matches your skill.",
                    "Description_DE": "Springen, Klettern, Werfen, Schwimmen, Gewichte heben, usw. Sie vereint die grundlegenden Elemente eines jeden Sportprogramms auf Highschool-Niveau. Diese Fertigkeit umfasst auch das Werfen von Waffen. Mit Base 10 bist du das Äquivalent eines echten Highschool-Sportlers, kannst lange Strecken laufen und eine respektable Menge heben. Mit einem Basiswert von 14 kannst du an Wettkämpfen auf College-Niveau teilnehmen und dich in allen Arten von sportlichen Herausforderungen behaupten. Mit einem Base 18 sind Sie olympisches oder professionelles Kaliber und es ist selten, dass Sie jemanden treffen, der Ihren Fähigkeiten entspricht.",
                    "Stat": "DEX"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Contortionist",
                    "Name_DE": "Verrenkungskünstler",
                    "Description_EN": "Skill of manipulating your body to get out of handcuffs or other bindings and to fit yourself into otherwise inaccessible places or spaces. At a Base 10, you can slip out of handcuffs sometimes and fit yourself into slightly tight spaces. At a Base 14, you have practiced your contortion and yoga is probably part of your daily ritual. You can slip out of handcuffs and bindings with relative ease and fit yourself into small cupboards. At a Base 18, you could be traveling with a circus. You can touch your toes to your head, slip out of complex rope bindings, and squeeze your body into spaces that would make an octopus sweat.",
                    "Description_DE": "Die Fähigkeit, den eigenen Körper zu manipulieren, um sich aus Handschellen oder anderen Fesseln zu befreien und sich in sonst unzugängliche Orte oder Räume zu begeben. Auf Basis 10 können Sie sich manchmal aus Handschellen befreien und sich in leicht beengte Räume einfügen. Bei einem Basiswert 14 haben Sie Ihre Verrenkungen geübt und Yoga ist wahrscheinlich Teil Ihres täglichen Rituals. Sie können sich relativ leicht aus Handschellen und Fesseln befreien und passen in kleine Schränke. Bei einem Basiswert von 18 könnten Sie mit einem Zirkus unterwegs sein. Sie können Ihre Zehen an den Kopf stoßen, aus komplizierten Seilbindungen schlüpfen und Ihren Körper in Räume zwängen, in denen ein Oktopus schwitzen würde.",
                    "Stat": "DEX"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Dance",
                    "Name_DE": "Tanz",
                    "Description_EN": "Skill of dancing at a professional level. At a Base 10, you've practiced some moves and could dance at a wedding and impress the bride and groom. At a Base 14, you could compete in one of Ziggurat's sponsored dance competitions and probably make it to the semi-finals. At a Base 18, you are probably well known for your dance moves and may even get requests from Corps for you to perform at their social functions.",
                    "Description_DE": "Die Fähigkeit, auf professionellem Niveau zu tanzen. Mit Base 10 hast du ein paar Schritte geübt und könntest auf einer Hochzeit tanzen und die Braut und den Bräutigam beeindrucken. Mit einer Base 14 könntest du an einem von Ziggurat gesponserten Tanzwettbewerb teilnehmen und es wahrscheinlich bis ins Halbfinale schaffen. Auf Basis 18 bist du wahrscheinlich für deine Tanzschritte bekannt und bekommst vielleicht sogar Anfragen von Korps, die dich bitten, bei ihren gesellschaftlichen Veranstaltungen aufzutreten.",
                    "Stat": "DEX"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Endurance",
                    "Name_DE": "Ausdauer",
                    "Description_EN": "Skill of withstanding harsh environmental conditions and hardship. This is also the ability to withstand pain or discomfort, particularly over long periods of time, by knowing the best ways to conserve strength and energy. Endurance Skill Checks are made whenever a Character must continue to be active after a long period without food, sleep, or water or after prologed activity. At a Base 10, you are generally a tough customer. Maybe you grew up in the outskirts or traveling with a Nomad pack. At a Base 14, you are trained in surviving harsh conditions and capable of living on the streets with no home or shelter, though not comfortably. If need be, you could flee to the badlands outside the City to escape trouble. At a Base 18, you are well accustomed to dangerous terrain and long-term hardship. You can live for long periods of time with minimal nourishment, live entirely alone in the Badlands and stay alert while on the run with no problem.",
                    "Description_DE": "Die Fähigkeit, rauen Umweltbedingungen und Härten zu widerstehen. Dies ist auch die Fähigkeit, Schmerzen oder Unbehagen zu ertragen, besonders über lange Zeiträume, indem man die besten Wege kennt, um Kraft und Energie zu sparen. Ausdauer-Fertigkeitsproben werden immer dann durchgeführt, wenn ein Charakter nach einer langen Zeit ohne Nahrung, Schlaf oder Wasser oder nach prologischer Aktivität weiter aktiv sein muss. Mit einem Basiswert von 10 bist du im Allgemeinen ein harter Brocken. Vielleicht bist du in den Außenbezirken aufgewachsen oder reist mit einem Nomadenrudel. Mit einem Basiswert 14 bist du darin geübt, unter harten Bedingungen zu überleben, und kannst auf der Straße leben, ohne ein Zuhause oder einen Unterschlupf zu haben, auch wenn es nicht bequem ist. Falls nötig, könntest du in die Badlands außerhalb der Stadt fliehen, um Schwierigkeiten zu entgehen. Mit einem Basiswert von 18 bist du an gefährliches Terrain und langfristige Entbehrungen gut gewöhnt. Du kannst lange Zeit mit minimaler Nahrung auskommen, ganz allein in den Badlands leben und auf der Flucht ohne Probleme wachsam bleiben.",
                    "Stat": "WILL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Resist Torture/Drugs",
                    "Name_DE": "Widerstand gegen Folter/Drogen",
                    "Description_EN": "Skill of resisting painful effects, including interrogation, torture, and drugs. At a Base 10, you've probably had some experiences with interrogation or hard drugs, and it's given you some knowledge of how to handle them. At a Base 14, you've trained yourself to withstand the garden-variety interrogation of the NCPD and several different poisons and drugs. At a Base 18, you're extremely hard to crack and you can shake off the effects of most poisons and drugs. You can withstand even the torture of psychos like the Iron Sights gang.",
                    "Description_DE": "Fähigkeit, schmerzhaften Einwirkungen zu widerstehen, einschließlich Verhör, Folter und Drogen. Bei einem Basiswert von 10 hast du wahrscheinlich schon einige Erfahrungen mit Verhören oder harten Drogen gemacht und weißt, wie du damit umgehen kannst. Auf Basis 14 hast du dich darauf vorbereitet, den üblichen Verhören der NCPD und verschiedenen Giften und Drogen zu widerstehen. Mit Base 18 bist du extrem schwer zu knacken und kannst die Wirkung der meisten Gifte und Drogen abschütteln. Du kannst sogar der Folter von Psychopathen wie der Iron Sights Gang widerstehen.",
                    "Stat": "WILL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Stealth",
                    "Name_DE": "Stealth",
                    "Description_EN": "Skill of moving quietly, hiding, doing an action discreetly, or otherwise evading detection. Other Characters can try to find you with their Perception Skill. At a Base 10, you can get past most guards, or your parents if you've been grounded. At a Base 14, you are good enough to slip smoothly from shadow to shadow and not make any noise. You can avoid guards and lose pursuers easily. At a Base 18, you are the equal of the corporate ninja employed by Arasaka. If you want to go unnoticed, there are few people who can spot you.",
                    "Description_DE": "Die Fähigkeit, sich leise zu bewegen, sich zu verstecken, eine Aktion diskret auszuführen oder sich auf andere Weise der Entdeckung zu entziehen. Andere Charaktere können versuchen, dich mit ihrer Wahrnehmungsfertigkeit zu finden. Mit einem Basiswert von 10 kannst du an den meisten Wachen oder deinen Eltern vorbeikommen, wenn du Hausarrest hattest. Mit Basis 14 bist du gut genug, um von Schatten zu Schatten zu schlüpfen und kein Geräusch zu machen. Du kannst Wachen ausweichen und Verfolger leicht abhängen. Mit einem Basiswert von 18 bist du den von Arasaka beschäftigten Firmen-Ninjas ebenbürtig. Wenn du unbemerkt bleiben willst, gibt es nur wenige Leute, die dich sehen können.",
                    "Stat": "DEX"
                }
            ]
        },
        {
            "Name_DE": "Fähigkeiten kontrollieren",
            "Name_EN": "Control Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Drive Land Vehicle",
                    "Name_DE": "Antrieb Landfahrzeug",
                    "Description_EN": "Skill of driving and maneuvering land vehicles. At a Base 10, you are the equal of a very good non-professional driver. You know how to handle yourself on the road and deal with road rage. At a Base 14, you are the equal of a moderately skilled race car driver. You can make bootlegger turns, jump small gaps, and drive in dangerous terrain. At a Base 18, you have the skill to be nationally known as a racer and probably can score a sponsorship deal with some of the biggest vehicle manufacturers out there.",
                    "Description_DE": "Geschicklichkeit beim Fahren und Manövrieren von Landfahrzeugen. Mit einem Basiswert von 10 sind Sie einem sehr guten nicht-professionellen Fahrer ebenbürtig. Sie wissen, wie man sich im Straßenverkehr verhält und wie man mit Verkehrsrowdys umgeht. Mit Base 14 sind Sie einem mäßig geübten Rennfahrer ebenbürtig. Sie können Kurven fahren, über kleine Lücken springen und in gefährlichem Gelände fahren. Mit Base 18 haben Sie die Fähigkeit, landesweit als Rennfahrer bekannt zu werden und können wahrscheinlich einen Sponsorenvertrag mit einigen der größten Fahrzeughersteller abschließen.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Pilot Air Vehicle (x2)",
                    "Name_DE": "Pilot Luftfahrzeug (x2)",
                    "Description_EN": "Skill of piloting and maneuvering air vehicles. At a Base 10, you are a trained pilot, able to engage in most combat situations or pilot an AV through bad weather. At a Base 14, you are a veteran pilot with a lot of time in the cockpit. You can handle yourself in almost any situation, including making complicated aerobatic maneuvers. At a Base 18, you have the skills to be widely known among the piloting community for having the \"right stuff.\" You can fly through storms and thread the needle between buildings in an AV-4.",
                    "Description_DE": "Fähigkeit, Luftfahrzeuge zu steuern und zu manövrieren. Auf Basis 10 bist du ein ausgebildeter Pilot, der in der Lage ist, die meisten Kampfsituationen zu meistern oder ein AV durch schlechtes Wetter zu steuern. Auf Basis 14 bist du ein erfahrener Pilot mit viel Zeit im Cockpit. Du kannst dich in fast jeder Situation zurechtfinden und auch komplizierte Kunstflugmanöver durchführen. Mit einer Base 18 sind Sie in der Pilotengemeinschaft dafür bekannt, dass Sie das \"richtige Zeug\" haben. Sie können durch Stürme fliegen und in einer AV-4 zwischen Gebäuden hindurchfliegen.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Pilot Sea Vehicle",
                    "Name_DE": "Pilot Seefahrzeug",
                    "Description_EN": "Skill of piloting and maneuvering sea vehicles. At a Base 10, you have piloted sea vehicles before, and you know the ins and outs of naval travel and combat. You can handle choppy water and hold your own in a skirmish. At a Base 14, you have spent a great deal of time on the water and probably been in a few naval encounters. You know how to come out on top in an even engagement. At a Base 18, you are a veteran of the seas, able to sail a cargo freighter through a hurricane and maneuver a speedboat through a slalom of debris and enemy ships.",
                    "Description_DE": "Geschicklichkeit beim Steuern und Manövrieren von Seefahrzeugen. Mit einem Basiswert von 10 hast du bereits Seefahrzeuge gesteuert und kennst dich mit der Seefahrt und dem Seekampf bestens aus. Du kommst mit kabbeligem Wasser zurecht und kannst dich in einem Gefecht behaupten. Auf Basis 14 haben Sie viel Zeit auf dem Wasser verbracht und waren wahrscheinlich in einige Seegefechte verwickelt. Sie wissen, wie Sie aus einem ausgeglichenen Gefecht als Sieger hervorgehen. Mit Basis 18 sind Sie ein Seeveteran, der in der Lage ist, einen Frachtfrachter durch einen Hurrikan zu steuern und ein Schnellboot durch einen Slalom aus Trümmern und feindlichen Schiffen zu manövrieren.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Riding",
                    "Name_DE": "Reiten",
                    "Description_EN": "Skill of riding a living creature trained for the purpose. At a Base 10, you've had the rare luxury of seeing and riding a horse. You know the basics of how to keep it from haring off. At a Base 14, somehow, you've had a great deal of experience riding (whether that's horses or other animals) and you are a very competent rider, able to make quick maneuvers and adjustments. At a Base 18, you can really connect with the creature you're riding to get the most out of them. You could and probably have at some point competed in Corporate dressage competitions. Horses are extremely rare and talented riders are even rarer.",
                    "Description_DE": "Die Fähigkeit, ein Lebewesen zu reiten, das für diesen Zweck ausgebildet wurde. Mit einem Basiswert von 10 hattest du den seltenen Luxus, ein Pferd zu sehen und zu reiten. Du kennst die Grundlagen, wie man es vom Ausbüxen abhält. Mit einem Basiswert von 14 haben Sie viel Erfahrung im Reiten (sei es auf Pferden oder auf anderen Tieren) und sind ein sehr kompetenter Reiter, der in der Lage ist, schnelle Manöver und Anpassungen vorzunehmen. Bei einem Basiswert von 18 kannst du dich wirklich mit der Kreatur, die du reitest, verbinden und das Beste aus ihr herausholen. Du könntest an Dressurwettbewerben teilnehmen und hast es wahrscheinlich auch schon getan. Pferde sind extrem selten und talentierte Reiter sind noch seltener.",
                    "Stat": "REF"
                }
            ]
        },
        {
            "Name_DE": "Bildung Fähigkeiten",
            "Name_EN": "Education Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Accounting",
                    "Name_DE": "Buchhaltung",
                    "Description_EN": "Skill of balancing books, creating false books, and identifying them, juggling numbers, creating budgets and handling day-to-day business operations. At a Base 10, you can manage the books for a small company by yourself and rarely make any clerical errors. At a Base 14, you can manage the books for a medium-sized Corp and hide your embezzlement at the same time. At a Base 18, you're a master at double entry and offshore accounting that would make the best white collar criminals proud. You'll probably be sought out by a Corp or a Crime Family to help them with their operations.",
                    "Description_DE": "Fähigkeit, Bücher auszugleichen, falsche Bücher zu erstellen und sie zu identifizieren, mit Zahlen zu jonglieren, Budgets zu erstellen und das Tagesgeschäft zu bewältigen. Mit einem Basiswert von 10 können Sie die Bücher eines kleinen Unternehmens selbst führen und machen nur selten Schreibfehler. Mit Base 14 können Sie die Bücher eines mittelgroßen Unternehmens führen und gleichzeitig Ihre Veruntreuungen verbergen. Mit Base 18 sind Sie ein Meister der doppelten Buchführung und der Offshore-Buchhaltung, der die besten Wirtschaftskriminellen stolz machen würde. Wahrscheinlich werden Sie von einem Konzern oder einer Verbrecherfamilie gesucht, um ihnen bei ihren Geschäften zu helfen.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Animal Handling",
                    "Name_DE": "Umgang mit Tieren",
                    "Description_EN": "Skill of handling, training, and caring for animals. At a Base 10, you know how to approach a wild animal without scaring it off, and you've kept a pet before. At a Base 14, you have the skill to train animals for other people, and you've encountered a few different animals in your life. At a Base 18, you may have worked with Biotechnica at some point on the various synthetics and cloned animals coming out recently. You can calm down just about any animal, and can train animals professionally for groups like the NCPD.",
                    "Description_DE": "Die Fähigkeit, mit Tieren umzugehen, sie abzurichten und zu pflegen. Auf Basis 10 weißt du, wie man sich einem wilden Tier nähert, ohne es zu verschrecken, und du hast schon einmal ein Haustier gehalten. Auf Basis 14 hast du die Fähigkeit, Tiere für andere Menschen zu trainieren, und du bist in deinem Leben schon einigen verschiedenen Tieren begegnet. Mit Basis 18 hast du vielleicht schon einmal mit Biotechnica an den verschiedenen synthetischen und geklonten Tieren gearbeitet, die in letzter Zeit auf den Markt gekommen sind. Du kannst so ziemlich jedes Tier beruhigen und trainierst Tiere professionell für Gruppen wie die NCPD.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Bureaucracy",
                    "Name_DE": "Bürokratie",
                    "Description_EN": "Skill for dealing with bureaucrats, cutting red tape, knowing who to talk to in a bureaucracy, how to reach them, and how to extract information from bureaucracies. At a Base 10, you've been around the block a few times and know how to deal with bureaucrats to avoid getting trapped in red tape. At a Base 14, you've worked with bureaucracies long enough to really start unraveling an organization's secrets. You know how to expedite orders, make sure your papers end up on the right desks, and even block other people's requests with Corps and government officials. At a Base 18, you are masterful at working the system. You know how to get just about anything you need done, tie up opposition in red tape for ages, and even manipulate the bureaucracy to create false claims and paperwork.",
                    "Description_DE": "Fähigkeit, mit Bürokraten umzugehen, Bürokratie abzubauen, zu wissen, mit wem man in der Bürokratie sprechen muss, wie man ihn erreicht und wie man Informationen aus der Bürokratie herausholt. Auf Stufe 10 haben Sie bereits einige Erfahrungen gesammelt und wissen, wie Sie mit Bürokraten umgehen müssen, um nicht in der Bürokratie zu versinken. Auf Stufe 14 haben Sie lange genug mit der Bürokratie zusammengearbeitet, um die Geheimnisse einer Organisation zu entschlüsseln. Sie wissen, wie Sie Aufträge beschleunigen, dafür sorgen, dass Ihre Papiere auf den richtigen Schreibtischen landen, und sogar die Anträge anderer Leute bei Korps- und Regierungsbeamten blockieren können. Mit einer Basis 18 bist du ein Meister darin, das System zu nutzen. Sie wissen, wie Sie so ziemlich alles, was Sie brauchen, durchsetzen können, wie Sie Widerstände ewig in der Bürokratie aufhalten und sogar die Bürokratie manipulieren können, um falsche Anträge und Papiere zu erstellen.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Business",
                    "Name_DE": "Business",
                    "Description_EN": "Skill regarding knowledge of basic business practices, laws of supply and demand, employee management, procurement, sales, and marketing. At a Base 10, you have the equivalent of a few business classes' worth of knowledge and you could run your own company. At a Base 14, you have been in business for a while now and know the ins and outs of running a successful business. You can get resources, hire skilled workers, and avoid hostile takeovers. You've learned just enough to get noticed by the bigger Corporates. At a Base 18, you know all about the wheeling and dealing of the corporate life. You know how to hire the best of the best, inspire people to thank you for the chance to work themselved to death, and you can extrapolate the future machinations of the Corps.",
                    "Description_DE": "Geschicklichkeit in Bezug auf die Kenntnis grundlegender Geschäftspraktiken, Gesetze von Angebot und Nachfrage, Mitarbeiterführung, Beschaffung, Verkauf und Marketing. Mit einem Basiswert von 10 verfügen Sie über das Wissen von ein paar Wirtschaftskursen und könnten Ihr eigenes Unternehmen leiten. Mit Basis 14 sind Sie schon eine Weile im Geschäft und wissen, wie man ein Unternehmen erfolgreich führt. Du kannst Ressourcen beschaffen, qualifizierte Mitarbeiter einstellen und feindliche Übernahmen verhindern. Sie haben gerade genug gelernt, um von den größeren Unternehmen wahrgenommen zu werden. Mit einer Basis von 18 wissen Sie alles über die Machenschaften des Unternehmenslebens. Sie wissen, wie man die Besten der Besten einstellt, wie man Leute dazu bringt, sich für die Chance, sich zu Tode zu schuften, zu bedanken, und Sie können die zukünftigen Machenschaften des Corps voraussehen.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Composition",
                    "Name_DE": "Zusammensetzung",
                    "Description_EN": "The required Skill for writing songs, articles, or stories. At a Base of 10, you can produce salable work and some people will even commission you for work. At a Base of 14 you can create works of art that gain you a small but passionate following and some critical acclaim. At a Base 18, you have the skill to be a nationally recognized composer creating works of art that rival the great artists, writers, and composters of the 20th and 21st centuries.",
                    "Description_DE": "Die erforderliche Fertigkeit zum Schreiben von Liedern, Artikeln oder Geschichten. Mit einem Basiswert von 10 kannst du verkaufsfähige Werke produzieren, und manche Leute werden dir sogar Aufträge erteilen. Mit einem Basiswert von 14 können Sie Kunstwerke schaffen, die Ihnen eine kleine, aber leidenschaftliche Fangemeinde und einige kritische Anerkennung einbringen. Mit einem Basiswert von 18 haben Sie die Fähigkeit, ein landesweit anerkannter Komponist zu sein und Kunstwerke zu schaffen, die es mit den großen Künstlern, Schriftstellern und Komponisten des 20. und 21.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Criminology",
                    "Name_DE": "Kriminologie",
                    "Description_EN": "Skill of discovering clues by dusting for fingerprints, doing ballistic tests, examining evidence, and searching through police records and files. At a Base 10, you've learned enough to ruin precinct procedural dramas forever. You know how to examine evidence, how to properly maintain a crime scene, and the basics of using police records. At a Base 14, you have spent a good deal of time studying criminology and it has paid off. You can navigate police precincts and records with ease and carry out murder investigations unaided. At a Base 18, you have the skill to be the next great detective. You can breeze through complex calculations to determine ballistics and blood spatter; and within moments of stepping on the scene of a crime you can get a clear view of exactly what happened. It takes a really unusual case to stump you.",
                    "Description_DE": "Die Fähigkeit, Hinweise zu finden, indem du Fingerabdrücke abstaubst, ballistische Tests durchführst, Beweise untersuchst und Polizeiaufzeichnungen und -akten durchsuchst. Mit einem Base 10 hast du genug gelernt, um Verfahrensdramen auf dem Revier für immer zu ruinieren. Du weißt, wie man Beweise untersucht, wie man einen Tatort richtig pflegt und die Grundlagen der Nutzung von Polizeiakten. Mit einem Niveau von 14 haben Sie viel Zeit mit dem Studium der Kriminologie verbracht, und das hat sich ausgezahlt. Sie können sich mühelos in Polizeirevieren und -unterlagen zurechtfinden und selbstständig Morduntersuchungen durchführen. Mit Base 18 haben Sie die Fähigkeit, der nächste große Detektiv zu werden. Sie können komplexe Berechnungen zur Bestimmung von Ballistik und Blutspritzern im Handumdrehen durchführen und sich innerhalb weniger Augenblicke, nachdem Sie den Tatort betreten haben, ein genaues Bild vom Geschehen machen. Es braucht schon einen wirklich ungewöhnlichen Fall, um dich zu verblüffen.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Cryptography",
                    "Name_DE": "Kryptographie",
                    "Description_EN": "Skill of encrypting and decoding messages. At a Base 10, you've learned how to code your messages well enough to keep the average person from figuring out what you're saying or writing and crack basic codes. At a Base 14, you have a lot of practice cracking codes and communicating in code. You could work for the CIA or any other secret service and get along fine. At a Base 18, you are a master of cryptography. There's no code or encryption out there that you can't crack given some time, and when you encode something you can be sure no one's gonna be decoding it without a professional cryptography team.",
                    "Description_DE": "Die Fähigkeit, Nachrichten zu verschlüsseln und zu entschlüsseln. Mit Base 10 haben Sie gelernt, Ihre Nachrichten so gut zu verschlüsseln, dass eine durchschnittliche Person nicht mehr herausfinden kann, was Sie sagen oder schreiben, und einfache Codes zu knacken. Mit Base 14 haben Sie viel Übung im Knacken von Codes und in der verschlüsselten Kommunikation. Sie könnten für die CIA oder einen anderen Geheimdienst arbeiten und kämen gut zurecht. Mit einer Base 18 sind Sie ein Meister der Kryptographie. Es gibt keinen Code oder keine Verschlüsselung, die Sie nicht mit etwas Zeit knacken können, und wenn Sie etwas verschlüsseln, können Sie sicher sein, dass niemand es ohne ein professionelles Kryptografie-Team entschlüsseln wird.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Deduction",
                    "Name_DE": "Abzug",
                    "Description_EN": "Skill of taking several clues and leaping to a non-obvious conclusion or medical diagnosis. At a Base 10, you can put two and two together and figure out most logical leaps, no problem. You can always deduce where you left your keys or how likely it is that the rash on your arm is deadly. At a Base 14, you have trained your mind to collect clues and organize them to make better deductions. You can make accurate long-range deductions like how long it will be before the gangers figure out you sold them dud cyberware. At a Base 18, your skills rival that of Sherlock Holmes. You are at the level of a world-class detective, building accurate deductions and predictions from the smallest clues imaginable. Some people may even think you're psychic.",
                    "Description_DE": "Die Fähigkeit, aus mehreren Hinweisen eine nicht offensichtliche Schlussfolgerung zu ziehen oder eine medizinische Diagnose zu stellen. Bei einem Basiswert von 10 kannst du zwei und zwei zusammenzählen und die meisten logischen Schlüsse problemlos ziehen. Du kannst immer ableiten, wo du deine Schlüssel vergessen hast oder wie wahrscheinlich es ist, dass der Ausschlag auf deinem Arm tödlich ist. Mit Base 14 hast du deinen Verstand darauf trainiert, Hinweise zu sammeln und sie zu ordnen, um bessere Schlussfolgerungen zu ziehen. Du kannst genaue, weitreichende Schlussfolgerungen ziehen, z. B. wie lange es dauern wird, bis die Ganger herausfinden, dass du ihnen gefälschte Cyberware verkauft hast. Mit einem Basiswert von 18 sind deine Fähigkeiten mit denen von Sherlock Holmes vergleichbar. Du bist auf dem Niveau eines Weltklasse-Detektivs, der aus den kleinsten Anhaltspunkten genaue Schlussfolgerungen und Vorhersagen macht. Manche Leute halten Sie sogar für einen Hellseher.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Education",
                    "Name_DE": "Bildung",
                    "Description_EN": "Skill of general knowledge, equivalent to a basic school education, allowing you to know how to read, write, use basic math, and know enough history to get by. At a Base 10, you have the equivalent of a basic college education. You have much more education than the average person in Night City. At a Base 14, you have a great deal of education, equal to having a Masters or a Doctorate. You probably don't actually have one due to the state of education in Night City. At a Base 18, you are an extremely well-educated person; one of those people who \"knows a lot about everything\" (and hopefully has the good sense to keep their mouth shut).",
                    "Description_DE": "Allgemeinwissen, das einer grundlegenden Schulbildung entspricht und es Ihnen ermöglicht, zu lesen, zu schreiben, die Grundrechenarten anzuwenden und genug über Geschichte zu wissen, um zurechtzukommen. Mit einem Basiswert von 10 hast du das Äquivalent einer grundlegenden College-Ausbildung. Du hast viel mehr Bildung als die Durchschnittsperson in Night City. Mit einem Basiswert von 14 verfügen Sie über ein hohes Maß an Bildung, das einem Master- oder Doktortitel entspricht. Aufgrund der Bildungssituation in Night City haben Sie wahrscheinlich gar keinen Abschluss. Mit einem Basiswert von 18 sind Sie eine extrem gebildete Person, eine von denen, die \"viel über alles wissen\" (und hoffentlich den gesunden Menschenverstand haben, ihren Mund zu halten).",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Gamble",
                    "Name_DE": "Gamble",
                    "Description_EN": "Skill of knowing how to figure odds and play games of chance successfully. At a Base 10, you know how to play cards and you've been to a few casinos. You win more than you lose— unless you go to a Corp or mob casino. At a Base 14, you have the skill to be a professional gambler. You know how to play all the major games and you can usually double your money when you play. At a Base 18, you're a master gambler. Whether that's counting cards, calling bluffs, reading tells, or some other eldritch skill you've learned it well enough to be really dangerous to anyone who gambles with you. You've probably been banned from a casino or two.",
                    "Description_DE": "Die Fähigkeit zu wissen, wie man Quoten berechnet und Glücksspiele erfolgreich spielt. Mit einem Basiswert von 10 wissen Sie, wie man Karten spielt, und Sie waren schon in ein paar Casinos. Du gewinnst mehr als du verlierst - es sei denn, du gehst in ein Casino der Corp. oder der Mafia. Mit einem Basiswert von 14 haben Sie die Fähigkeit, ein professioneller Spieler zu sein. Sie wissen, wie man alle wichtigen Spiele spielt und können Ihr Geld normalerweise verdoppeln, wenn Sie spielen. Bei einer Base 18 sind Sie ein Meisterspieler. Egal, ob es sich um Kartenzählen, Bluffen, Tells lesen oder eine andere unheimliche Fähigkeit handelt, Sie haben es so gut gelernt, dass Sie für jeden, der mit Ihnen spielt, wirklich gefährlich sind. Wahrscheinlich wurdest du schon aus dem einen oder anderen Casino verbannt.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Language",
                    "Name_DE": "Sprache",
                    "Description_EN": "Skill of speaking a particular language. You must choose a specific language whenever you increase this Skill. At a Base 10, you can speak the language well enough to get by on the street but you don't understand a lot of the slang. At a Base 14, you are a fluent speaker of the language and most people assume you grew up speaking the language. At a Base 18, you not only speak the language fluently but you know all the ins and outs of the language including slang, complicated situational rules, and all dialects of the language.",
                    "Description_DE": "Fertigkeit, eine bestimmte Sprache zu sprechen. Du musst eine bestimmte Sprache wählen, wenn du diese Fertigkeit erhöhst. Mit Basis 10 kannst du die Sprache gut genug sprechen, um dich auf der Straße zurechtzufinden, aber du verstehst nicht viel von der Umgangssprache. Mit Basis 14 sprichst du die Sprache fließend und die meisten Leute gehen davon aus, dass du mit dieser Sprache aufgewachsen bist. Mit Base 18 sprechen Sie die Sprache nicht nur fließend, sondern kennen auch alle Einzelheiten der Sprache, einschließlich der Umgangssprache, komplizierter situationsbezogener Regeln und aller Dialekte der Sprache.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Library Search",
                    "Name_DE": "Bibliothekssuche",
                    "Description_EN": "Skill of using databases, the Data Pool, libraries, and other compiled information sources to find facts. At a Base 10, you can use all databases and even search libraries and physical manifests of information. At a Base 14, you could easily access the Library of Congress (if it was still there) and find rare facts pertaining to old subjects. At a Base 18, you can comprehend any public database and most private databases. You can find extremely obscure facts and you're pretty sure you could even find facts and files from before the DataKrash if there weren't so many R.A.B.I.D.S.",
                    "Description_DE": "Fähigkeit, Datenbanken, den Datenpool, Bibliotheken und andere zusammengestellte Informationsquellen zu nutzen, um Fakten zu finden. Auf Basis 10 können Sie alle Datenbanken nutzen und sogar Bibliotheken und physische Informationsmanifeste durchsuchen. Mit Basis 14 könntest du problemlos auf die Kongressbibliothek zugreifen (wenn es sie noch gäbe) und seltene Fakten zu alten Themen finden. Auf Basis 18 können Sie jede öffentliche Datenbank und die meisten privaten Datenbanken durchsuchen. Sie können extrem obskure Fakten finden, und Sie sind sich ziemlich sicher, dass Sie sogar Fakten und Dateien aus der Zeit vor dem DataKrash finden könnten, wenn es nicht so viele R.A.B.I.D.S. gäbe.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Local Expert",
                    "Name_DE": "Lokaler Experte",
                    "Description_EN": "Skill of knowing a specific area well and knowing the agendas of its various factions, both political and criminal. You must choose a specific location whenever you increase this Skill, which cannot be any larger than a single neighborhood or community. At a Base 10, you know the area pretty well; where to go to get whatever you need, where to avoid, what the local public factions are like. At a Base 14, you are well acquainted with the area and not only do you know the basics but you are aware of the underlying problems, factions, and rules that the average tourist isn't. At a Base 18, you could act as a tour guide for the area. You've poked your nose in everywhere, talked to most of the people, seen the sights, and experienced most of what the area has to offer. You are almost never at a loss for info.",
                    "Description_DE": "Die Fähigkeit, ein bestimmtes Gebiet gut zu kennen und die Pläne der verschiedenen politischen und kriminellen Gruppierungen zu kennen. Wenn du diese Fertigkeit erhöhst, musst du einen bestimmten Ort wählen, der nicht größer als ein einzelnes Stadtviertel oder eine Gemeinde sein darf. Mit Basis 10 kennst du die Gegend ziemlich gut; wo du alles bekommst, was du brauchst, wo du dich nicht aufhalten solltest und wie die örtlichen öffentlichen Parteien sind. Auf einem Stützpunkt 14 sind Sie mit der Gegend gut vertraut und kennen nicht nur die Grundlagen, sondern wissen auch über die zugrunde liegenden Probleme, Gruppierungen und Regeln Bescheid, was der durchschnittliche Tourist nicht weiß. Auf einem Stützpunkt 18 könnten Sie als Fremdenführer für das Gebiet fungieren. Sie haben Ihre Nase überall reingesteckt, mit den meisten Leuten gesprochen, die Sehenswürdigkeiten gesehen und das meiste erlebt, was die Gegend zu bieten hat. Sie sind fast nie um eine Information verlegen.",
                    "Stat": "INT"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Science",
                    "Name_DE": "Wissenschaft",
                    "Description_EN": "Skill for knowing how to design experiments, write scientific papers, test hypotheses, and discuss with other academics in a particular field of science. An area of study must be specified whenever this Skill is increased. Possible options include",
                    "Description_DE": "Die Fähigkeit, Experimente zu planen, wissenschaftliche Arbeiten zu verfassen, Hypothesen zu testen und mit anderen Wissenschaftlern in einem bestimmten Bereich der Wissenschaft zu diskutieren. Bei jeder Erhöhung dieser Fähigkeit muss ein Studienbereich angegeben werden. Mögliche Optionen sind",
                    "Stat": "INT"
                }
            ]
        },
        {
            "Name_DE": "Kampffähigkeiten",
            "Name_EN": "Fighting Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Brawling",
                    "Name_DE": "Schlägerei",
                    "Description_EN": "Skill at fighting and grappling with brute strength. At a Base 10, you're a pretty good bar brawler and you can hold your own in a fist fight. You know how to throw a punch and some of the intricacies of wrestling. At a Base 14, you could be a professional fighter in any number of pit-fighting arenas or official venues around the City. You can lay out most opponents and while you don't have a lot of finesse you know how to use your strength to your advantage. At a Base 18, you are a seasoned fighter with an iron grip and a mean right hook. All it takes is one good punch or perfectly executed grapple for most people to think twice about fighting you.",
                    "Description_DE": "Geschicklichkeit im Kämpfen und Greifen mit roher Kraft. Mit einem Basiswert von 10 bist du ein ziemlich guter Kneipenschläger und kannst dich in einem Faustkampf behaupten. Du weißt, wie man einen Schlag ausführt und kennst einige der Feinheiten des Ringens. Mit Basis 14 könntest du ein professioneller Kämpfer in einer beliebigen Anzahl von Boxkampfarenen oder offiziellen Veranstaltungsorten in der Stadt sein. Du kannst die meisten Gegner außer Gefecht setzen und weißt, wie du deine Stärke zu deinem Vorteil nutzen kannst, auch wenn du nicht viel Finesse hast. Mit einem Basiswert von 18 bist du ein erfahrener Kämpfer mit einem eisernen Griff und einem fiesen rechten Haken. Es braucht nur einen guten Schlag oder einen perfekt ausgeführten Griff, damit die meisten Leute es sich zweimal überlegen, ob sie gegen dich kämpfen.",
                    "Stat": "DEX"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Evasion",
                    "Name_DE": "Ausweichen",
                    "Description_EN": "Skill for getting out of the way of someone attacking you in melee. A Character with REF 8 or higher can also use this Skill to dodge Ranged Attacks and Explosions. At a Base 10, you're fast on your feet and when in need you can usually get out of the way. At a Base 14, you're quick enough to dodge most gangers and you can even hold your own against skilled combatants armed with monokatanas and monofilament whips. At a Base 18, you've trained your body to start moving before your brain even responds to what's happening around you.",
                    "Description_DE": "Fähigkeit, um einem Nahkampfangriff aus dem Weg zu gehen. Ein Charakter mit REF 8 oder höher kann diese Fähigkeit auch nutzen, um Fernkampfangriffen und Explosionen auszuweichen. Mit einem Basiswert von 10 bist du schnell auf den Beinen und kannst in der Regel ausweichen, wenn es nötig ist. Mit einem Basiswert von 14 bist du schnell genug, um den meisten Gangs auszuweichen, und kannst dich sogar gegen erfahrene Kämpfer behaupten, die mit Monokatanas und Monofilamentpeitschen bewaffnet sind. Mit Base 18 hast du deinen Körper so trainiert, dass du dich schon bewegst, bevor dein Gehirn überhaupt auf das reagiert, was um dich herum passiert.",
                    "Stat": "DEX"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Martial Arts (x2)",
                    "Name_DE": "Kampfsportarten (x2)",
                    "Description_EN": "Skill for fighting with a Martial Arts Form. Each time you increase this Skill you must choose in which form you are training. You can learn multiple forms, but you must do so separately. Possible options",
                    "Description_DE": "Fertigkeit für den Kampf mit einer Kampfkunstform. Jedes Mal, wenn du diese Fertigkeit erhöhst, musst du wählen, in welcher Form du trainierst. Du kannst mehrere Formen erlernen, aber du musst dies separat tun. Mögliche Optionen",
                    "Stat": "DEX"
                }
            ]
        },
        {
            "Name_DE": "Leistungsfähigkeiten",
            "Name_EN": "Performance Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Acting",
                    "Name_DE": "Handelnde",
                    "Description_EN": "Skill of assuming a role, disguising yourself as someone else, whether real or fictitious, and faking emotions and moods. At a Base 10, you have some skill in disguise and acting. You can make solid disguises as long as they aren't too intensive, and you can convince most people you are who you say you are. At a Base 14, you are a skilled impersonator, actor, and disguise artist. You can mimic voices with solid results and create disguises that include more complicated aspects like changes in race or highly advanced or reduced age. At a Base 18, you are so good you could probably pick a person on the street and completely steal their life. Even their own friends and family wouldn't know the difference. As long as you get rid of the original first.",
                    "Description_DE": "Fähigkeit, in eine Rolle zu schlüpfen, sich als jemand anderes zu verkleiden, egal ob real oder fiktiv, und Gefühle und Stimmungen vorzutäuschen. Mit einem Basiswert von 10 verfügst du über eine gewisse Fertigkeit in Verkleidung und Schauspielerei. Du kannst solide Verkleidungen machen, solange sie nicht zu intensiv sind, und du kannst die meisten Leute davon überzeugen, dass du der bist, für den du dich ausgibst. Mit einem Basiswert von 14 bist du ein geschickter Imitator, Schauspieler und Verkleidungskünstler. Du kannst Stimmen mit soliden Ergebnissen imitieren und Verkleidungen kreieren, die kompliziertere Aspekte wie Veränderungen der Rasse oder ein stark fortgeschrittenes oder reduziertes Alter beinhalten. Mit einer Basis von 18 bist du so gut, dass du wahrscheinlich eine Person auf der Straße auswählen und ihr das Leben rauben könntest. Selbst die eigenen Freunde und Familienmitglieder würden den Unterschied nicht bemerken. Vorausgesetzt, man wird das Original vorher los.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Play Instrument",
                    "Name_DE": "Instrument spielen",
                    "Description_EN": "Skill of professionally playing a musical instrument. You can choose which instrument when you increase this Skill. Possible options include singing, guitar, drums, violin, piano, etc. At a Base 10, you are skilled enough to play professional gigs and get paid for your performances. At a Base 14, you have the skill to really start getting some recognition for your talent. Places you played at might call you up and ask you to play there again. At a Base 18, you could be a widely acclaimed superstar like the late, great Johnny Silverhand. All you need is a shot and you could be performing on stage in front of millions.",
                    "Description_DE": "Die Fähigkeit, ein Musikinstrument professionell zu spielen. Du kannst wählen, welches Instrument du spielst, wenn du diese Fertigkeit erhöhst. Mögliche Optionen sind Gesang, Gitarre, Schlagzeug, Geige, Klavier usw. Mit Basis 10 bist du geschickt genug, um professionell aufzutreten und für deine Auftritte bezahlt zu werden. Mit Basis 14 hast du die Fähigkeit, wirklich Anerkennung für dein Talent zu bekommen. Orte, an denen du gespielt hast, rufen dich vielleicht an und bitten dich, dort wieder zu spielen. Mit einer Base 18 könntest du ein weithin anerkannter Superstar sein, wie der verstorbene, großartige Johnny Silverhand. Alles, was du brauchst, ist eine Chance, und du könntest auf der Bühne vor Millionen Menschen auftreten.",
                    "Stat": "TECH"
                }
            ]
        },
        {
            "Name_DE": "Fernkampfwaffe auf Fertigkeiten",
            "Name_EN": "Ranged Weap on Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Archery",
                    "Name_DE": "Archery",
                    "Description_EN": "Skill for accurately firing bolt- or arrow-launching projectile weapons. At a Base 10, you are a fairly skilled archer who can hit a target easily in the range of your weapon. At a Base 14, you are skilled enough to hit shots that the average archer would struggle to land and you can almost always hit a target in the sweet spot of your range. At a Base 18, you are an archer to rival Robin Hood with enough skill to hit targets hundreds of m/ yds away and perform stunts like shooting things out of people's hands.",
                    "Description_DE": "Fertigkeit zum präzisen Abfeuern von Projektilwaffen mit Bolzen oder Pfeil. Mit einem Basiswert von 10 bist du ein recht geschickter Bogenschütze, der ein Ziel in der Reichweite deiner Waffe leicht treffen kann. Mit Basis 14 bist du so geschickt, dass du Schüsse abfeuerst, die ein durchschnittlicher Bogenschütze nur mit Mühe erreichen würde, und du kannst ein Ziel fast immer im Sweet Spot deiner Reichweite treffen. Mit Basis 18 bist du ein Bogenschütze, der mit Robin Hood mithalten kann und genug Geschick besitzt, um Ziele in Hunderten von Metern Entfernung zu treffen und Kunststücke zu vollführen, wie z. B. Dinge aus den Händen von Menschen zu schießen.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Autofire (x2)",
                    "Name_DE": "Autofire (x2)",
                    "Description_EN": "Skill for keeping a weapon's Autofire firing mode on target through recoil. At a Base 10, you can fire an assault rifle in full auto and keep the climb down but you'd better be in the sweet spot of your range to hit. At a Base 14, you're more used to controlling an Autofire weapon and you can keep your groupings fairly tight. It's likely that you have an SMG or an Assault Rifle as your primary weapon. At a Base 18, you can accurately hit targets out to 100m/yds if you have the perfect conditions and a little luck. You are a terror on the battlefield who can riddle an opponent with bullets with the accuracy of a finely tuned machine.",
                    "Description_DE": "Fertigkeit, mit der man im Autofire-Modus einer Waffe durch den Rückstoß hindurch das Ziel im Auge behält. Mit Basis 10 kannst du ein Sturmgewehr mit Vollautomatik abfeuern und die Steigung niedrig halten, aber du solltest dich im Sweet Spot deiner Reichweite befinden, um zu treffen. Mit einem Basiswert von 14 sind Sie besser an die Steuerung einer Autofire-Waffe gewöhnt und können Ihre Schussabstände relativ eng halten. Es ist wahrscheinlich, dass du eine SMG oder ein Sturmgewehr als Primärwaffe hast. Mit einem Basiswert von 18 kannst du Ziele auf 100 m genau treffen, wenn du die perfekten Bedingungen und ein wenig Glück hast. Du bist ein Schrecken auf dem Schlachtfeld, der einen Gegner mit der Genauigkeit einer fein abgestimmten Maschine mit Kugeln durchlöchern kann.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Handgun",
                    "Name_DE": "Handgun",
                    "Description_EN": "Skill for accurately firing handheld projectile weapons. At a Base 10, you know how to maintain and accurately fire handguns, SMGs in single-shot mode, and other small firearms. At a Base 14, you are a skilled gunslinger with a quick hand and a good eye. You can hit your targets easily in your sweet spot and you can make longer range shots more accurately. At a Base 18, you are a deadeye gunslinger. You can shoot coins from 12m/yds away and shoot the guns out of people's hands. You have the skill to be known as one of the best pistoleros in the City.",
                    "Description_DE": "Fähigkeit zum präzisen Abfeuern von handgeführten Projektilwaffen. Mit einem Basiswert von 10 kannst du Handfeuerwaffen, SMGs im Einzelschussmodus und andere kleine Schusswaffen warten und präzise abfeuern. Mit Basis 14 bist du ein geschickter Revolverheld mit einer schnellen Hand und einem guten Auge. Du triffst deine Ziele leicht in deinem Sweet Spot und kannst Schüsse aus größerer Entfernung präziser abgeben. Mit einem Basiswert von 18 bist du ein Schütze mit einem guten Auge. Du kannst Münzen aus 12 m Entfernung abschießen und Leuten die Pistolen aus der Hand reißen. Du hast die Fähigkeit, als einer der besten Pistoleros in der Stadt bekannt zu werden.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Heavy Weapons (x2)",
                    "Name_DE": "Schwere Waffen (x2)",
                    "Description_EN": "Skill for accurately firing extremely large projectile weapons. At a Base 10, you know how to maintain and accurately fire rocket launchers, grenade launchers, railguns, and other heavy weaponry. At a Base 14, you've had the training to really excel at firing heavy weaponry. You are deadly accurate with rockets and grenades and you could easily serve as a mounted- turret gunner in the next Corporate War. At a Base 18, you have the skill to be a master with heavy weaponry. You know this machinery so well you can make trick shots with railguns and drop grenades down chimneys at 100m/yds.",
                    "Description_DE": "Fähigkeit zum präzisen Abfeuern extrem großer Projektilwaffen. Auf Basis 10 weißt du, wie man Raketenwerfer, Granatwerfer, Railguns und andere schwere Waffen wartet und präzise abfeuert. Mit Basis 14 hast du das Training absolviert, um beim Abfeuern schwerer Waffen wirklich hervorragend zu sein. Du bist tödlich treffsicher mit Raketen und Granaten und könntest im nächsten Konzernkrieg problemlos als Turmschütze eingesetzt werden. Mit einem Basiswert von 18 bist du ein Meister im Umgang mit schweren Waffen. Du kennst dich mit dieser Maschinerie so gut aus, dass du mit Railguns Trickschüsse abgeben und Granaten auf 100 m Entfernung in Schornsteine werfen kannst.",
                    "Stat": "REF"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Shoulder Arms",
                    "Name_DE": "Schulter-Arme",
                    "Description_EN": "Skill for firing shoulder-braced projectile weapons. At a Base 10, you know how to maintain and accurately fire assault rifles, shotguns, sniper rifles, and other shoulder-braced firearms. At a Base 14, you are skilled enough to hit complicated shots like firing through windows to hit targets in buildings and you can almost always hit a target in the sweet spot of your range. At a Base 18, you are the equal of rifle sharpshooters like Annie Oakley and famous snipers such as Vasily Zaytsev. In most cases, if you can see a target you can hit it. It's probably not long before the security Corps start fighting over you.",
                    "Description_DE": "Fertigkeit zum Abfeuern von schultergestützten Projektilwaffen. Mit einem Basiswert von 10 kannst du Sturmgewehre, Schrotflinten, Scharfschützengewehre und andere Schulterbügelwaffen warten und präzise abfeuern. Mit Basis 14 sind Sie in der Lage, komplizierte Schüsse abzugeben, z. B. durch Fenster hindurch, um Ziele in Gebäuden zu treffen, und Sie können fast immer ein Ziel im Sweet Spot Ihrer Reichweite treffen. Mit einem Basiswert von 18 sind Sie Gewehrschützen wie Annie Oakley und berühmten Scharfschützen wie Vasily Zaytsev ebenbürtig. Wenn Sie ein Ziel sehen können, können Sie es in den meisten Fällen auch treffen. Es wird wahrscheinlich nicht lange dauern, bis sich die Sicherheitskorps um Sie streiten.",
                    "Stat": "REF"
                }
            ]
        },
        {
            "Name_DE": "Soziale Kompetenzen",
            "Name_EN": "Social Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Bribery",
                    "Name_DE": "Bestechung",
                    "Description_EN": "Skill of knowing when to bribe someone, how to approach them, and how much to offer. At a Base 10, you know how to bribe a guard to look the other way or keep a witness from spilling simple secrets. At a Base 14, you have a knack for reading people and knowing how to manipulate them. You've made tons of deals and you've got the skill to bribe witnesses not to stand trial, coerce the NCPD into leaving your operations alone for a night, and maybe even convince a corporate hit squad that you're more valuable alive. At a Base 18, you are a master of greasing palms. Everyone wants something and you have a gift for knowing exactly what to offer. Even the most incorruptible people in City are hard pressed to deny your offer.",
                    "Description_DE": "Die Fähigkeit, zu wissen, wann man jemanden bestechen kann, wie man an ihn herantritt und wie viel man anbieten muss. Mit Basis 10 weißt du, wie du eine Wache bestechen kannst, damit sie wegschaut oder einen Zeugen davon abhält, einfache Geheimnisse auszuplaudern. Mit Basis 14 hast du ein Händchen dafür, Menschen zu lesen und sie zu manipulieren. Du hast schon viele Deals gemacht und bist in der Lage, Zeugen zu bestechen, damit sie sich nicht vor Gericht verantworten müssen, die NCPD zu zwingen, dich eine Nacht lang in Ruhe zu lassen, und vielleicht sogar ein Killerkommando eines Unternehmens davon zu überzeugen, dass du lebendig wertvoller bist. Mit einem Basiswert von 18 sind Sie ein Meister im Schmieren von Palmen. Jeder will etwas, und du hast die Gabe, genau zu wissen, was du anbieten kannst. Selbst die unbestechlichsten Leute in der Stadt können Ihr Angebot nur schwer ablehnen.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Conversation",
                    "Name_DE": "Konversation",
                    "Description_EN": "Skill of extracting information from people without alerting them through careful conversation. At a Base 10, you are a smooth talker who can coerce their subject into telling them simple information. At a Base 14, you would make an excellent interviewer, convincing subjects to tell you anecdotes about the past, pontificate about favorite interests and philosophies, etc. At a Base 18, you have the skill to gently maneuver a person into telling you everything, including extremely personal information, like how they have an illegitimate son and the fact that no one ever truly loved them.",
                    "Description_DE": "Die Fähigkeit, durch vorsichtige Konversation Informationen aus Menschen herauszuholen, ohne sie zu alarmieren. Bei einem Basiswert von 10 sind Sie ein gewandter Redner, der seine Gesprächspartner dazu zwingen kann, ihm einfache Informationen zu geben. Mit Basis 14 sind Sie ein hervorragender Interviewer, der seine Gesprächspartner dazu bringt, ihm Anekdoten aus der Vergangenheit zu erzählen, über Lieblingsinteressen und -philosophien zu schwadronieren usw. Auf Stufe 18 haben Sie die Fähigkeit, eine Person sanft dazu zu bringen, Ihnen alles zu erzählen, auch sehr persönliche Informationen, z. B. dass sie einen unehelichen Sohn hat und dass niemand sie jemals wirklich geliebt hat.",
                    "Stat": "EMP"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Human Perception",
                    "Name_DE": "Menschliche Wahrnehmung",
                    "Description_EN": "Skill of reading a person's facial expressions and body language to discern their emotional state and detect lies or deception. At a Base 10, you can usually tell when you're not getting the whole truth and you're adept at reading people's emotions. At a Base 14, you can detect subtle evasions and mood swings with ease, and you've learned the tells of most of your companions. At a Base 18, you can not only detect subtle emotional clues, but if a person is hiding something, you can usually tell what they're hiding in a general sense.",
                    "Description_DE": "Die Fähigkeit, den Gesichtsausdruck und die Körpersprache einer Person zu lesen, um ihren emotionalen Zustand zu erkennen und Lügen oder Täuschungen aufzudecken. Auf Basis 10 erkennst du in der Regel, wenn du nicht die ganze Wahrheit erfährst, und bist geschickt darin, die Emotionen von Menschen zu lesen. Auf Basis 14 erkennst du mit Leichtigkeit subtile Ausflüchte und Stimmungsschwankungen, und du kennst die meisten deiner Begleiter. Mit einem Basiswert von 18 kannst du nicht nur subtile emotionale Hinweise erkennen, sondern auch, wenn eine Person etwas verbirgt, kannst du in der Regel sagen, was sie im Allgemeinen verbirgt.",
                    "Stat": "EMP"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Interrogation",
                    "Name_DE": "Anfrage",
                    "Description_EN": "Skill of forcibly extracting information from people. At a Base of 10, you have the skill to infallibly find out if your mainline is lying to you and you've got a basic knowledge of \"advanced interrogation techniques.\" At a Base 14, you are a professionally proficient interrogator, equivalent to a skilled detective grilling a suspect. Depending on how moral you are, you may also be skilled in prying information out of subjects more forcefully. At a Base 18, you are on par with the famous Media, Lyle Thompson, allowing you to make even the most powerful people sweat with just a few words. If push comes to shove, you are very well acquainted with instruments of torture.",
                    "Description_DE": "Die Fähigkeit, Menschen gewaltsam Informationen zu entlocken. Mit einem Basiswert von 10 kannst du unfehlbar herausfinden, ob deine Hauptperson dich anlügt, und du verfügst über Grundkenntnisse in \"fortgeschrittenen Verhörtechniken\". Mit einem Basiswert von 14 bist du ein professioneller Verhörspezialist, vergleichbar mit einem erfahrenen Detektiv, der einen Verdächtigen verhört. Je nachdem, wie moralisch Sie sind, sind Sie auch in der Lage, Informationen aus Personen mit mehr Nachdruck herauszupressen. Mit einem Basiswert von 18 bist du dem berühmten Medienmann Lyle Thompson ebenbürtig und kannst selbst die mächtigsten Leute mit ein paar Worten zum Schwitzen bringen. Wenn es hart auf hart kommt, bist du mit Folterinstrumenten bestens vertraut.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Persuasion",
                    "Name_DE": "Überredung",
                    "Description_EN": "Skill of convincing, persuading, or influencing individuals. Also, the ability to talk others into doing what you want. This may be used individually or on large groups. At a Base 10, you can win most debates or convince your mainline that the blonde you were with was your sister. At a Base 14, you are a smooth talker of professional caliber. If you want to start a career in politics in the City this is where that dream can start becoming a reality. At a Base 18, you are truly gifted with a silver tongue and you have the skill to convince almost anyone of just about anything, if it's not too insane.",
                    "Description_DE": "Die Fähigkeit, Menschen zu überzeugen, zu überreden oder zu beeinflussen. Auch die Fähigkeit, andere zu überreden, das zu tun, was man will. Diese Fähigkeit kann einzeln oder in großen Gruppen eingesetzt werden. Mit einem Basiswert von 10 können Sie die meisten Debatten gewinnen oder Ihre Hauptleitung davon überzeugen, dass die Blondine, mit der Sie zusammen waren, Ihre Schwester ist. Mit einem Basiswert von 14 sind Sie ein geschmeidiger Redner von professionellem Format. Wenn Sie in der Stadt eine Karriere in der Politik anstreben, ist das der Punkt, an dem dieser Traum Wirklichkeit werden kann. Mit einem Basiswert von 18 sind Sie wahrlich begabt mit einer silbernen Zunge und haben die Fähigkeit, fast jeden von allem zu überzeugen, wenn es nicht zu verrückt ist.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Personal Grooming",
                    "Name_DE": "Personal Grooming",
                    "Description_EN": "Skill of knowing proper grooming, hair styling, etc., to maximize your physical attractiveness. Use of this Skill allows Characters to increase their chances of successful seduction or persuasion. At a Base 10, you know how to keep yourself looking good. You know a few beauty routines and you can style your own hair and do your own makeup. At a Base 14, you are a professional with the knowledge to pull off specific make up styles and complex hairdos to take your look to the next level. At a Base 18, you have the skill to be a world class artist, inventing new styles and setting trends in the City. You are always \"together.\" And you know it.",
                    "Description_DE": "Die Fähigkeit, die richtige Körperpflege, das richtige Haarstyling usw. zu beherrschen, um die eigene körperliche Attraktivität zu maximieren. Mit dieser Fertigkeit können Charaktere ihre Chancen auf eine erfolgreiche Verführung oder Überredung erhöhen. Mit einem Basiswert von 10 weißt du, wie du dich selbst gut aussehen lassen kannst. Du kennst ein paar Schönheitsroutinen und kannst dein Haar selbst stylen und dich schminken. Auf Stufe 14 sind Sie ein Profi mit dem Wissen, wie man spezielle Make-up-Stile und komplexe Frisuren hinbekommt, um Ihr Aussehen auf die nächste Stufe zu heben. Mit Base 18 hast du die Fähigkeit, ein Weltklasse-Künstler zu sein, der neue Stile erfindet und Trends in der Stadt setzt. Du bist immer \"dabei\". Und du weißt es.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Streetwise",
                    "Name_DE": "Streetwise",
                    "Description_EN": "Skill of knowing where to get illegal and contraband things, talking to the criminal element, and avoiding bad situations in bad neighborhoods. At a Base 10, you can get some \"hot\" items, score street drugs, and figure out who's the best Fixer in the neighborhood. At a Base 14, you know how to get in contact with a Solo to arrange a murder contract, you might know a few mobsters, and you know which neighborhoods to steer clear of. At a Base 18, you have the skill to become a major crime lord yourself and skip the middlemen. You know the right Fixers to talk to and the right palms to grease.",
                    "Description_DE": "Die Fähigkeit, zu wissen, wo man illegale und geschmuggelte Dinge bekommt, mit dem kriminellen Element zu reden und schlechte Situationen in schlechten Vierteln zu vermeiden. Auf Basis 10 kannst du \"heiße\" Gegenstände besorgen, Straßendrogen auftreiben und herausfinden, wer der beste Fixer in der Nachbarschaft ist. Bei einer Base 14 weißt du, wie du mit einem Solo in Kontakt treten kannst, um einen Mordauftrag zu arrangieren, du kennst vielleicht ein paar Mafiosi und du weißt, welche Gegenden du meiden solltest. Auf Basis 18 haben Sie die Fähigkeit, selbst ein großer Verbrecher zu werden und die Mittelsmänner zu überspringen. Du kennst die richtigen Fixer, mit denen du reden kannst, und die richtigen Hände, die du schmieren musst.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Trading",
                    "Name_DE": "Handel",
                    "Description_EN": "Skill of striking a good bargain with a merchant or customer. At a Base 10, you are a solid trader who can haggle deals, and get a good deal on ammunition at the local market. At a Base 14, you have the skill to make deals with Nomad caravans to get new goods at reasonable prices and you are probably well known at the local Night Market. At a Base 18, you are a master of economic maneuvering and can buy and sell goods for astonishing value. Now all you have to do is make sure you don't get on the wrong side of the local Fixers.",
                    "Description_DE": "Die Fähigkeit, ein gutes Geschäft mit einem Händler oder Kunden zu machen. Mit Basis 10 bist du ein solider Händler, der um Geschäfte feilschen kann und auf dem örtlichen Markt ein gutes Geschäft mit Munition macht. Mit Basis 14 hast du die Fähigkeit, mit Nomadenkarawanen zu verhandeln, um neue Waren zu vernünftigen Preisen zu bekommen, und du bist wahrscheinlich auf dem örtlichen Nachtmarkt gut bekannt. Mit Basis 18 sind Sie ein Meister des wirtschaftlichen Manövrierens und können Waren zu erstaunlichen Preisen kaufen und verkaufen. Jetzt müssen Sie nur noch dafür sorgen, dass Sie nicht auf die falsche Seite der örtlichen Fixer geraten.",
                    "Stat": "COOL"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Wardrobe & Style",
                    "Name_DE": "Garderobe & Stil",
                    "Description_EN": "Skill of knowing the right clothes to wear, when to wear them, and how to look cool even in a spacesuit. At a Base 10, you are good at choosing clothes off the rack. You can put together a stylish looking outfit and coordinate everything you're wearing from your shoes to your cyberware. At a Base 14, your friends ask you for wardrobe tips, and you have the skill to design professional outfits for them on commission. At a Base 18, you are one of those rare people whose personal style influences major fashion trends. It's probably not long before you get scouted by one of the major fashion Corps.",
                    "Description_DE": "Die Fähigkeit zu wissen, welche Kleidung man trägt, wann man sie trägt und wie man auch in einem Raumanzug cool aussieht. Mit einem Basiswert von 10 bist du gut darin, Kleidung von der Stange auszuwählen. Du kannst ein schickes Outfit zusammenstellen und alles, was du trägst, von deinen Schuhen bis zu deiner Cyberware, aufeinander abstimmen. Auf Basis 14 bitten dich deine Freunde um Garderobentipps, und du bist in der Lage, für sie professionelle Outfits auf Bestellung zu entwerfen. Mit Base 18 gehören Sie zu den wenigen Menschen, deren persönlicher Stil die wichtigsten Modetrends beeinflusst. Es wird wahrscheinlich nicht lange dauern, bis Sie von einem der großen Modekonzerne entdeckt werden.",
                    "Stat": "COOL"
                }
            ]
        },
        {
            "Name_DE": "Technische Fertigkeiten",
            "Name_EN": "Technique Skills",
            "Skills": [
                {
                    "CostFactor": 1,
                    "Name_EN": "Air Vehicle Tech",
                    "Name_DE": "Luftfahrzeugtechnik",
                    "Description_EN": "Skill of repairing and maintaining air vehicles. The DV and amount of time it takes you to repair a damaged/ destroyed vehicle with this Skill to perfect condition is based on the amount of damage it has sustained. (see sidebar on Page 140). At a Base 10, you have gotten good at maintaining and repairing AVs, Gyrocopters, Helicopters, and other flying vehicles. At a Base 14, you are a skilled mechanic who can easily repair almost any damage to an air vehicle given enough time. At a Base 18, you can rebuild an AV-4 from a smoking pile of rubble in just a week and can fix up a broken rotor with your eyes closed.",
                    "Description_DE": "Fähigkeit, Luftfahrzeuge zu reparieren und zu warten. Die DV und die Zeit, die du brauchst, um ein beschädigtes/zerstörtes Fahrzeug mit dieser Fertigkeit wieder in einen perfekten Zustand zu bringen, hängt von der Höhe des Schadens ab, den es erlitten hat. (siehe Seitenleiste auf Seite 140). Mit Basis 10 bist du gut in der Wartung und Reparatur von AVs, Gyrocoptern, Helikoptern und anderen fliegenden Fahrzeugen. Auf Basis 14 bist du ein erfahrener Mechaniker, der mit genügend Zeit fast jeden Schaden an einem Luftfahrzeug reparieren kann. Auf Basis 18 kannst du einen AV-4 in nur einer Woche aus einem rauchenden Trümmerhaufen wieder aufbauen und einen kaputten Rotor mit geschlossenen Augen reparieren.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Basic Tech",
                    "Name_DE": "Basic Tech",
                    "Description_EN": "Skill of identifying, understanding, and repairing simple electronic devices and all other items not covered by another TECH Skill. The DV and amount of time it takes you to repair a damaged/destroyed item with this Skill to perfect condition is based on the Price Category of the item (see sidebar on Page 140). At a Base 10, you are pretty handy with technology. You can fix a printer jam in your office, rebuild a microwave, and do basic repairs on factory machinery. At a Base 14, you are the local handyman for your neighborhood. You have an unerring sense for what to do when machinery starts acting up. At a Base 18, you are a technical wizard when it comes to household items and basic machinery. You can repair heavy machinery with ease and spot problems and faults in your tech before they become an issue.",
                    "Description_DE": "Fähigkeit, einfache elektronische Geräte und alle anderen Gegenstände, die nicht von einer anderen TECH-Fähigkeit abgedeckt werden, zu identifizieren, zu verstehen und zu reparieren. Die DV und die Zeit, die du brauchst, um einen beschädigten/zerstörten Gegenstand mit dieser Fertigkeit in einen perfekten Zustand zu bringen, basiert auf der Preiskategorie des Gegenstands (siehe Seitenleiste auf Seite 140). Mit einem Basiswert von 10 bist du ziemlich geschickt im Umgang mit Technik. Du kannst einen klemmenden Drucker in deinem Büro reparieren, eine Mikrowelle wiederherstellen und einfache Reparaturen an Fabrikmaschinen durchführen. Mit einem Basiswert von 14 sind Sie der lokale Handwerker in Ihrer Nachbarschaft. Du hast ein untrügliches Gespür dafür, was zu tun ist, wenn eine Maschine nicht mehr funktioniert. Auf Basis 18 bist du ein technisches Genie, wenn es um Haushaltsgegenstände und einfache Maschinen geht. Du kannst schwere Maschinen mit Leichtigkeit reparieren und Probleme und Fehler in deiner Technik erkennen, bevor sie zu einem Problem werden.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Cybertech",
                    "Name_DE": "Cybertech",
                    "Description_EN": "Skill of identifying, understanding, and repairing cybernetics. The DV and amount of time it takes you to repair a damaged/ destroyed item with this Skill to perfect condition is based on the Price Category of the item. (see sidebar on Page 140). At a Base 10, you are well-versed in the ins and outs of cybertech. You probably have some cybertech installed and can maintain it with no problems. At a Base 14, you know a lot about cyberware and cybertech. You can rewire a Cyberarm, and even do some mechanical work with improvised tools if need be. At a Base 18, you have the skill to keep all cybertech with which you come in contact in perfect shape. You almost never have to worry about the effects of Microwavers and EMP devices in the field.",
                    "Description_DE": "Fähigkeit, Kybernetik zu erkennen, zu verstehen und zu reparieren. Die DV und die Zeit, die du brauchst, um einen beschädigten/zerstörten Gegenstand mit dieser Fertigkeit bis zum perfekten Zustand zu reparieren, hängt von der Preiskategorie des Gegenstands ab. (siehe Seitenleiste auf Seite 140). Mit einem Basiswert von 10 kennst du dich gut mit Cybertech aus. Wahrscheinlich hast du bereits Cybertech installiert und kannst sie ohne Probleme warten. Mit Base 14 weißt du viel über Cyberware und Cybertech. Du kannst einen Cyberarm neu verkabeln und sogar einige mechanische Arbeiten mit improvisierten Werkzeugen durchführen, wenn es nötig ist. Mit Basis 18 hast du die Fähigkeit, alle Cybertechnik, mit der du in Kontakt kommst, in perfektem Zustand zu halten. Sie müssen sich fast nie Sorgen über die Auswirkungen von Mikrowellenherden und EMP-Geräten im Einsatz machen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Demolitions (x2)",
                    "Name_DE": "Abrisse (x2)",
                    "Description_EN": "Skill of setting, defusing, and knowing how much explosive will accomplish a desired result. This Skill allows the Character to be knowledgeable in the use of explosives, as well as knowing the best explosives to use for which jobs and identifying explosive in the field. At a Base 10, you can handle most premade explosives and you have a basic concept of what explosives are good for what jobs. At a Base 14, you have an intimate knowledge of demolitions and you can set bombs with timers and confidently defuse bombs set by others. At a Base 18, you are an expert in demolitions with knowledge of every explosive under the sun. You can defuse most bombs with your eyes shut and you know how to set explosives to get controlled results like blowing open doors and causing limited destruction.",
                    "Description_DE": "Die Fähigkeit, Sprengstoff zu platzieren, zu entschärfen und zu wissen, wie viel Sprengstoff für ein gewünschtes Ergebnis benötigt wird. Diese Fertigkeit ermöglicht es dem Charakter, sich im Umgang mit Sprengstoff auszukennen und zu wissen, welcher Sprengstoff für welche Aufgabe am besten geeignet ist und wie man Sprengstoff vor Ort identifiziert. Mit Basis 10 kann man mit den meisten vorgefertigten Sprengstoffen umgehen und hat ein grundlegendes Konzept, welche Sprengstoffe für welche Aufgaben geeignet sind. Mit einem Basislevel 14 kennen Sie sich mit Sprengungen bestens aus, können Bomben mit Zeitzündern legen und von anderen gelegte Bomben sicher entschärfen. Auf Basis 18 bist du ein Experte für Sprengungen und kennst jeden Sprengstoff, den es gibt. Du kannst die meisten Bomben mit geschlossenen Augen entschärfen und weißt, wie man Sprengstoffe so platziert, dass sie kontrollierte Ergebnisse erzielen, z. B. Türen aufsprengen und begrenzte Zerstörung verursachen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Electronics/Security Tech (x2)",
                    "Name_DE": "Elektronik/Sicherheitstechnik (x2)",
                    "Description_EN": "Skill of identifying, understanding, repairing, countering, and installing complex electronic devices like computers, cyberdecks, personal electronics, electronic security systems, bugs and tracers, pressure plates, laser tripwires, etc. The DV and amount of time it takes you to repair a damaged/destroyed item with this Skill to perfect condition is based on the Price Category of the item (see sidebar on Page 140). At a Base 10, you are skilled enough to fix your Agent when it starts acting up and you're confident you could rewire a stock security system. At a Base 14, you have the skills required to be a solid tinkerer or a skilled infiltrator. You can crack simple security systems with ease and rebuild a computer given enough time. At a Base 18, you have the skill to rival high-level Netrunners with your security cracking and you have a chance to repair even the most complex and expensive tech if given enough time and a little luck.",
                    "Description_DE": "Fähigkeit, komplexe elektronische Geräte wie Computer, Cyberdecks, persönliche Elektronik, elektronische Sicherheitssysteme, Wanzen und Peilsender, Druckplatten, Laserdrähte usw. zu erkennen, zu verstehen, zu reparieren, zu bekämpfen und zu installieren. Die DV und die Zeit, die du brauchst, um einen beschädigten/zerstörten Gegenstand mit dieser Fertigkeit wieder in einen perfekten Zustand zu bringen, hängt von der Preiskategorie des Gegenstands ab (siehe Seitenleiste auf Seite 140). Mit einem Basiswert von 10 bist du geschickt genug, um deinen Agenten zu reparieren, wenn er nicht mehr funktioniert, und du bist zuversichtlich, dass du ein Sicherheitssystem neu verkabeln könntest. Mit einem Basiswert von 14 verfügst du über die nötigen Fähigkeiten, um ein solider Tüftler oder ein geschickter Infiltrator zu sein. Du kannst einfache Sicherheitssysteme mit Leichtigkeit knacken und einen Computer wieder aufbauen, wenn du genug Zeit hast. Mit Basis 18 kannst du es mit hochstufigen Netrunnern aufnehmen und hast die Chance, selbst die komplexesten und teuersten Technologien zu reparieren, wenn du genug Zeit und ein wenig Glück hast.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "First Aid",
                    "Name_DE": "Erste Hilfe",
                    "Description_EN": "Skill of applying medical treatments to a wounded person to keep them from dying, and treating the most common Critical Injuries. At a Base 10, you have basic first-aid training and know how to handle injuries in the field. When someone calls for a doctor in an emergency, you're not the best choice but you can get the job done. At a Base 14, you can take care of all simple wounds and keep people from dying. You probably carry a Medtech bag with you just in case. At a Base 18, you are a miracle worker with a medkit. As long as you're on your feet, death is going to have to wait.",
                    "Description_DE": "Fähigkeit, eine verwundete Person medizinisch zu versorgen, um sie vor dem Tod zu bewahren, und die häufigsten kritischen Verletzungen zu behandeln. Mit einem Basislevel von 10 hast du eine grundlegende Erste-Hilfe-Ausbildung und weißt, wie du Verletzungen vor Ort behandeln kannst. Wenn jemand in einem Notfall nach einem Arzt ruft, bist du nicht die beste Wahl, aber du kannst die Arbeit erledigen. In einem Stützpunkt 14 kannst du alle einfachen Wunden versorgen und verhindern, dass Menschen sterben. Wahrscheinlich trägst du für den Fall der Fälle eine Medtech-Tasche bei dir. Auf einer Basis 18 bist du ein Wundertäter mit einem Medkit. Solange du auf den Beinen bist, wird der Tod warten müssen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Forgery",
                    "Name_DE": "Fälschung",
                    "Description_EN": "Skill of creating and detecting false documents, works of art, and identification. Forgery is most often opposed by Forgery. At a Base 10, you can fake simple IDs and you can be fairly sure of whether any document handed to you is false. At a Base 14, you can pass forgeries off to all but the most sophisticated examination and rarely do forgeries get by your initial inspection. At a Base 18, you could display your fakes in the best museums.",
                    "Description_DE": "Die Fähigkeit, falsche Dokumente, Kunstwerke und Ausweise zu erstellen und zu erkennen. Der Fälschung steht am häufigsten die Fälschung gegenüber. Auf Basis 10 können Sie einfache Ausweise fälschen und Sie können ziemlich sicher sein, ob ein Ihnen ausgehändigtes Dokument gefälscht ist. Bei einem Basiswert 14 können Sie Fälschungen bei jeder noch so anspruchsvollen Prüfung erkennen, und nur selten entgehen Ihnen Fälschungen bei der ersten Prüfung. Bei einem Basiswert von 18 können Sie Ihre Fälschungen in den besten Museen ausstellen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Land Vehicle Tech",
                    "Name_DE": "Landfahrzeugtechnik",
                    "Description_EN": "Skill of repairing and maintaining vehicles that move on land. The DV and amount of time it takes you to repair a damaged/destroyed vehicle with this Skill to perfect condition is based on the amount of damage it has sustained. (see sidebar on Page 140). At a Base 10, you have gotten good at maintaining and repairing roadbikes, groundcars, and other land vehicles. At a Base 14, you are a skilled mechanic, who can easily repair almost any damage to a land vehicle given enough time. At a Base 18, you can to salvage and rebuild old military transports from the badlands and you could fix a flat while in your sleep.",
                    "Description_DE": "Fertigkeit zur Reparatur und Wartung von Fahrzeugen, die sich an Land bewegen. Die DV und die Zeit, die du brauchst, um ein beschädigtes/zerstörtes Fahrzeug mit dieser Fertigkeit wieder in einen perfekten Zustand zu bringen, hängt von der Höhe des Schadens ab, den es erlitten hat. (siehe Seitenleiste auf Seite 140). Mit einem Basiswert von 10 bist du gut im Warten und Reparieren von Motorrädern, Bodenfahrzeugen und anderen Landfahrzeugen geworden. Auf Basis 14 bist du ein geschickter Mechaniker, der mit genügend Zeit fast jeden Schaden an einem Landfahrzeug beheben kann. Auf Basis 18 kannst du alte Militärtransporter aus dem Ödland bergen und umbauen, und du kannst einen Platten im Schlaf reparieren.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Paint/Draw/Sculpt",
                    "Name_DE": "Malen/Zeichnen/Skulptur",
                    "Description_EN": "Skill of producing professional paintings, drawings, or sculpture. At a Base 10, you are skilled enough to create works of art that actually make you significant money on the market. At a Base 14, you have the skill to really start getting some recognition for your talent. Your art is, maybe, featured in some screamsheets or Data Pool articles. At a Base 18, you could be nationally known, have exhibits in galleries, and have other lesser artists studying your style in art school.",
                    "Description_DE": "Die Fähigkeit, professionelle Gemälde, Zeichnungen oder Skulpturen herzustellen. Mit einem Basiswert von 10 sind Sie in der Lage, Kunstwerke zu schaffen, mit denen Sie auf dem Markt Geld verdienen können. Mit einem Basiswert von 14 haben Sie die Fähigkeit, wirklich Anerkennung für Ihr Talent zu bekommen. Ihre Kunst wird vielleicht in einigen Screamsheets oder Data-Pool-Artikeln gezeigt. Mit Base 18 könnten Sie landesweit bekannt sein, in Galerien ausgestellt werden und andere weniger begabte Künstler Ihren Stil in der Kunstschule studieren.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 2,
                    "Name_EN": "Paramedic (x2)",
                    "Name_DE": "Rettungssanitäter (x2)",
                    "Description_EN": "Skill of applying medical treatments to a wounded person to keep them from dying, and treating all Critical Injuries not requiring Surgery. (Surgery is only available to Medtechs through their Role Ability, Medicine.) At a Base 10, you could fill in for Trauma Team as long as the situation hasn't gotten too dire. You can splint limbs and stabilize patients for transport to a hospital. At a Base 14, you are more than skilled enough to work as a Trauma Team Medical Assistant. If you can get to a patient in time, you can make sure they make it out in one piece. At a Base 18, you are the equivalent of a seasoned first-responder with enough medical knowledge to arrive on the scene of a firefight or natural disaster and immediately start saving lives.",
                    "Description_DE": "Die Fähigkeit, Verwundete medizinisch zu versorgen, um sie vor dem Tod zu bewahren, und alle kritischen Verletzungen zu behandeln, die keine Operation erfordern. (Chirurgie ist nur für Medtechs über ihre Rollenfähigkeit Medizin verfügbar.) Mit einem Basiswert von 10 kannst du für das Trauma-Team einspringen, solange die Situation nicht zu ernst wird. Du kannst Gliedmaßen schienen und Patienten für den Transport in ein Krankenhaus stabilisieren. Mit einem Basiswert von 14 sind Sie mehr als qualifiziert genug, um als medizinischer Assistent des Trauma-Teams zu arbeiten. Wenn du rechtzeitig zu einem Patienten kommst, kannst du dafür sorgen, dass er es in einem Stück herausschafft. Mit einem Base 18 sind Sie das Äquivalent eines erfahrenen Ersthelfers, der über genügend medizinisches Wissen verfügt, um bei einem Feuer oder einer Naturkatastrophe sofort mit der Rettung von Menschenleben zu beginnen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Photography/Film",
                    "Name_DE": "Photography/Film",
                    "Description_EN": "Skill for producing professional photographs, motion pictures, or braindances. At a Base 10, you are skilled enough to make decent home movies with some special effects. At a Base 14, you are a skilled artist, creating work at the level of the average magazine cover or rock music video. At a Base 18, you could be a widely acclaimed producer. All you need is a shot, and you could be filming the next award-winning blockbuster.",
                    "Description_DE": "Fähigkeit zur Herstellung von professionellen Fotos, Filmen oder Braindances. Mit Basis 10 sind Sie geschickt genug, um anständige Heimfilme mit einigen Spezialeffekten zu drehen. Auf Basis 14 sind Sie ein geschickter Künstler, der Arbeiten auf dem Niveau eines durchschnittlichen Zeitschriftencovers oder Rockmusikvideos erstellt. Mit Base 18 könnten Sie ein weithin anerkannter Produzent sein. Alles, was Sie brauchen, ist eine Aufnahme, und Sie könnten den nächsten preisgekrönten Blockbuster drehen.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Pick Lock",
                    "Name_DE": "Pick Lock",
                    "Description_EN": "Skill for picking non-electronic locks and countering non-electronic security measures. At a Base 10, you can jimmy most simple locks and you never get locked out of your apartment for long. At a Base 14, you could be a competent cat burglar. You can crack most safes if you have the right tools and enough time. At a Base 18, you could build a rep as a master cracksman. You can crack stock safes like they were nothing and if you got a chance at it, you could probably crack the bespoke vaults of any number of Corps in the City.",
                    "Description_DE": "Fähigkeit zum Knacken nicht-elektronischer Schlösser und zur Abwehr nicht-elektronischer Sicherheitsmaßnahmen. Mit einem Basiswert von 10 kannst du die meisten einfachen Schlösser knacken und wirst nie lange aus deiner Wohnung ausgesperrt. Mit einem Basiswert von 14 können Sie ein kompetenter Einbrecher sein. Du kannst die meisten Tresore knacken, wenn du das richtige Werkzeug und genügend Zeit hast. Mit Basis 18 könntest du dir einen Ruf als Meisterknacker aufbauen. Du kannst Tresore knacken, als wären sie ein Kinderspiel, und wenn du die Chance dazu hättest, könntest du wahrscheinlich auch die maßgeschneiderten Tresore einer beliebigen Anzahl von Korps in der Stadt knacken.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Pick Pocket",
                    "Name_DE": "Taschendieb",
                    "Description_EN": "Skill for picking pockets and shoplifting small items without being noticed. At a Base 10, you've got quick fingers and deep pockets. You can make a good deal of money pick pocketing people on the street, as long as you don't push your luck. At a Base 14, you have the skill needed to start operating in a Corporate Zone where the real money is. You can lift a wallet and ID badges no problem. At a Base 18, you could lift a Solo's wallet, stop them to apologize for bumping into them, and lift their pistol while you're at it. ID badges, watches, glasses, grenades, it's all fair game.",
                    "Description_DE": "Fähigkeit zum Taschendiebstahl und zum unbemerkten Stehlen kleiner Gegenstände. Mit einem Basiswert von 10 hast du schnelle Finger und tiefe Taschen. Sie können mit Taschendiebstählen auf der Straße eine Menge Geld verdienen, solange Sie Ihr Glück nicht überstrapazieren. Mit Basis 14 hast du die nötigen Fähigkeiten, um in einer Unternehmenszone zu arbeiten, wo das wahre Geld liegt. Sie können eine Brieftasche und Ausweise problemlos stehlen. Auf Basis 18 können Sie die Brieftasche eines Solisten stehlen, ihn anhalten, um sich zu entschuldigen, weil Sie ihn angerempelt haben, und ihm nebenbei die Pistole abnehmen. Ausweise, Uhren, Brillen, Granaten, alles ist Freiwild.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Sea Vehicle Tech",
                    "Name_DE": "Technik für Seefahrzeuge",
                    "Description_EN": "Skill of repairing and maintaining sea vehicles. The DV and amount of time it takes you to repair a damaged/ destroyed vehicle with this Skill to perfect condition is based on the amount of damage it has sustained (see sidebar on Page 140). At a Base 10, you have gotten good at maintaining and repairing jet skis, cabin cruisers, yachts, and other sea vehicles. At a Base 14, you are a skilled mechanic, who can easily repair almost any damage to a sea vehicle given enough time. At a Base 18, you can dredge up old Arasaka ships from off the coast and get them up and working in no time, and you never have to worry about your ship sinking.",
                    "Description_DE": "Fertigkeit zur Reparatur und Wartung von Seefahrzeugen. Die DV und die Zeit, die du brauchst, um ein beschädigtes/zerstörtes Fahrzeug mit dieser Fertigkeit wieder in einen perfekten Zustand zu bringen, hängt von der Höhe des Schadens ab, den es erlitten hat (siehe Seitenleiste auf Seite 140). Mit einem Basiswert von 10 bist du gut darin, Jetskis, Kabinenkreuzer, Yachten und andere Seefahrzeuge zu warten und zu reparieren. Auf Basis 14 sind Sie ein erfahrener Mechaniker, der mit genügend Zeit fast jeden Schaden an einem Wasserfahrzeug reparieren kann. Auf Basis 18 können Sie alte Arasaka-Schiffe vor der Küste ausbaggern und im Handumdrehen wieder flott machen, und Sie müssen sich nie Sorgen machen, dass Ihr Schiff sinkt.",
                    "Stat": "TECH"
                },
                {
                    "CostFactor": 1,
                    "Name_EN": "Weaponstech",
                    "Name_DE": "Weaponstech",
                    "Description_EN": "Skill for repairing and maintaining weapons of all types. The DV and amount of time it takes you to repair a damaged/destroyed item with this Skill to perfect condition is based on the Price Category of the item",
                    "Description_DE": "Fertigkeit zum Reparieren und Warten von Waffen aller Art. Die DV und die Zeit, die du brauchst, um einen beschädigten/zerstörten Gegenstand mit dieser Fertigkeit in einen perfekten Zustand zu bringen, hängt von der Preiskategorie des Gegenstands ab",
                    "Stat": "TECH"
                }
            ]
        }
    ];
}