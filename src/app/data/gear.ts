import { Gear } from '../models/gear';

export function getAllGear(): Gear[] {
  return [
    {
      Name: 'Agent',
      Name_DE: 'Agent',
      Description:
        'Self-adaptive AI powered smartphone. +2 to Library Search. +2 to Wardrobe and Style under some circumstances. See pg. 352 for more information.',
      Description_DE:
        'Selbstanpassendes KI-gesteuertes Smartphone. +2 auf Bibliothekssuche. +2 auf Garderobe und Stil unter bestimmten Umständen. Siehe S. 352 für weitere Informationen.',
      CostDescription: '100eb (Premium)  Airhypo',
      Cost: 100,
    },
    {
      Name: 'Braindance Viewer',
      Name_DE: 'Braindance-Viewer',
      Description: 'Allows viewer to experience braindance.',
      Description_DE: 'Ermöglicht dem Betrachter, Braindance zu erleben.',
      CostDescription: '1000eb (V. Expensive)',
      Cost: 1000,
    },
    {
      Name: 'Bug Detector',
      Name_DE: 'Wanzendetektor',
      Description: 'Beeps when within 2m/yds of a listening device.',
      Description_DE:
        'Piepst, wenn sich das Gerät in einer Entfernung von 2 m von einer Abhöranlage befindet.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Carryall',
      Name_DE: 'Carryall',
      Description: 'Bag for carrying stuff.',
      Description_DE: 'Tasche zum Transportieren von Sachen.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Chemical Analyzer',
      Name_DE: 'Chemischer Analyzer',
      Description:
        'Can test chemical composition of substance against a database of samples.',
      Description_DE:
        'Kann die chemische Zusammensetzung einer Substanz anhand einer Datenbank von Proben prüfen.',
      CostDescription: '1000eb (V. Expensive)',
      Cost: 1000,
    },
    {
      Name: 'Computer',
      Name_DE: 'Computer',
      Description: 'Laptop or desktop computer.',
      Description_DE: 'Laptop oder Desktop-Computer.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Cyberdeck',
      Name_DE: 'Cyberdeck',
      Description:
        'Basic deck for netrunning. 7 slots. See pg. 353 for more information.',
      Description_DE:
        'Basis-Deck für Netrunning. 7 Steckplätze. Siehe S. 353 für weitere Informationen.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Disposable Cell Phone',
      Name_DE: 'Wegwerf-Handy',
      Description: 'Makes calls. Easy to dump if needed.',
      Description_DE:
        'Erledigt Anrufe. Kann bei Bedarf leicht entsorgt werden.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Drum Synthesizer',
      Name_DE: 'Drum Synthesizer',
      Description: 'Can simulate almost any type of drum. Needs amp.',
      Description_DE:
        'Kann fast jede Art von Trommel simulieren. Benötigt Verstärker.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Duct Tape',
      Name_DE: 'Klebeband',
      Description: 'Comes in many colors, including glow-in-the-dark.',
      Description_DE: 'Erhältlich in vielen Farben, auch im Dunkeln leuchtend.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Electric Guitar/ Other Instrument',
      Name_DE: 'E-Gitarre/ anderes Instrument',
      Description: 'Good for making music. Electric versions need amp.',
      Description_DE:
        'Gut zum Musizieren. Elektrische Versionen brauchen Verstärker.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Flashlight',
      Name_DE: 'Flashlight',
      Description: '100m/yd beam of light. Lasts 10 hours on a charge.',
      Description_DE: '100m/yd beam of light. Lasts 10 hours on a charge.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Food Stick',
      Name_DE: 'Lebensmittel-Stick',
      Description: 'One awful meal in bar form.',
      Description_DE: 'Eine furchtbare Mahlzeit in Riegelform.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'Glow Paint',
      Name_DE: 'Glühende Farbe',
      Description: 'Glow in dark spraypaint.',
      Description_DE: 'Im Dunkeln leuchtende Sprühfarbe.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Glow Stick',
      Name_DE: 'Glühstab',
      Description: 'Illuminates up to 4m/yds. Lasts for 10 hours.',
      Description_DE: 'Leuchtet bis zu 4m/yds. Hält 10 Stunden lang.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'Grapple Gun',
      Name_DE: 'Enterhakenpistole',
      Description:
        'Fires a grapple line up to 30m/yds. Cannot be used as a weapon.',
      Description_DE:
        'Feuert eine Fangleine bis zu 30m/yds. Kann nicht als Waffe verwendet werden.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Handcuffs',
      Name_DE: 'Handschellen',
      Description: 'Restraints. Requires BODY >10 to break.',
      Description_DE: 'Fesseln. Erfordert KÖRPER >10 zum Brechen.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Homing Tracer',
      Name_DE: 'Zielsuchende Fährte',
      Description: 'Can follow a linked tracer up to 1-mile away.',
      Description_DE:
        'Kann einem verknüpften Tracer bis zu 1 Meile weit folgen.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Inflatable Bed & Sleep-bag',
      Name_DE: 'Aufblasbares Bett & Schlafsack',
      Description: 'Self-inflating mattress w/ sleeping bag.',
      Description_DE: 'Selbstaufblasbare Matratze mit Schlafsack.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Kibble Pack',
      Name_DE: 'Kibble Pack',
      Description: "One meal's worth of Kibble.",
      Description_DE: 'Kibble im Wert einer Mahlzeit.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'Lock Picking Set',
      Name_DE: 'Lock Picking Set',
      Description: 'Used to crack mechanical locks.',
      Description_DE: 'Wird zum Knacken von mechanischen Schlössern verwendet.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Medscanner',
      Name_DE: 'Medscanner',
      Description:
        'Helps diagnose illness and injury. +2 to First Aid and Paramedic.',
      Description_DE:
        'Hilft bei der Diagnose von Krankheiten und Verletzungen. +2 bis Erste Hilfe und Rettungssanitäter.',
      CostDescription: '1000eb (V. Expensive)',
      Cost: 1000,
    },
    {
      Name: 'Medtech Bag',
      Name_DE: 'Medtech Bag',
      Description: 'A full medical toolkit in a bag.',
      Description_DE:
        'Ein kompletter medizinischer Werkzeugkasten in einer Tasche.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Memory Chip',
      Name_DE: 'Speicherchip',
      Description: 'Standard data storage device.',
      Description_DE: 'Standard-Datenspeichergerät.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'MRE',
      Name_DE: 'MRE',
      Description: 'Self-heating plastic and foil meal bag.',
      Description_DE:
        'Selbsterhitzende Mahlzeitentasche aus Kunststoff und Folie.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'Personal CarePak',
      Name_DE: 'Personal CarePak',
      Description: 'Everything you need to clean up.',
      Description_DE: 'Alles, was Sie zum Aufräumen brauchen.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Pocket Amplifier',
      Name_DE: 'Taschen-Verstärker',
      Description:
        'Can support up to two instruments. Lasts 6 hours per charge.',
      Description_DE:
        'Kann bis zu zwei Instrumente unterstützen. Hält 6 Stunden pro Ladung.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Radar Detector',
      Name_DE: 'Radarwarner',
      Description: 'Beeps if within 100m/yd of an active radar beam.',
      Description_DE:
        'Piept, wenn es sich innerhalb von 100m/yd eines aktiven Radarstrahls befindet.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Radiation Suit',
      Name_DE: 'Radiation Suit',
      Description: 'Protects you from radiation',
      Description_DE: 'Protects you from radiation',
      CostDescription: '1,000eb (V. Expensive)',
      Cost: 1000,
    },
    {
      Name: 'Radio Communicator',
      Name_DE: 'Radio-Kommunikator',
      Description: 'Earpiece. One mile range.',
      Description_DE: 'Hörmuschel. Eine Meile Reichweite.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Radio Scanner/ Music Player',
      Name_DE: 'Radioscanner/Musikspieler',
      Description:
        'Play the hottest music or tune into radio bands within 1-mile.',
      Description_DE:
        'Spielen Sie die angesagteste Musik oder hören Sie Radiosender im Umkreis von 1 Meile.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Road Flare',
      Name_DE: 'Straßenfackel',
      Description: 'Lights up an area of 100m/yd for 1 hour.',
      Description_DE: 'Beleuchtet einen Bereich von 100m/yd für 1 Stunde.',
      CostDescription: '10eb (Cheap)',
      Cost: 10,
    },
    {
      Name: 'Rope (60m/yd)',
      Name_DE: 'Seil (60m/yd)',
      Description: 'Nylon rope.',
      Description_DE: 'Nylon-Seil.',
      CostDescription: '20eb (Everyday)',
      Cost: 20,
    },
    {
      Name: 'Scrambler/ Descrambler',
      Name_DE: 'Scrambler/ Descrambler',
      Description: 'Scrambles/descrambles communications.',
      Description_DE: 'Verschlüsselt/entschlüsselt die Kommunikation.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Smart Glasses',
      Name_DE: 'Smart Glasses',
      Description:
        'Technologically enhanced glasses. Has 2 slots for Cyberoptic Options.',
      Description_DE:
        'Technologisch verbesserte Brille. Verfügt über 2 Steckplätze für cyberoptische Optionen.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Tech Bag',
      Name_DE: 'Tech Bag',
      Description: 'Small bag of tools for fixing stuff.',
      Description_DE: 'Kleine Tasche mit Werkzeug zum Reparieren von Dingen.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Techscanner',
      Name_DE: 'Techscanner',
      Description:
        'Helps diagnose broken tech. +2 to multiple TECH-based Skills.',
      Description_DE:
        'Hilft bei der Diagnose von kaputter Technik. +2 auf mehrere TECH-basierte Fertigkeiten.',
      CostDescription: '1000eb (V. Expensive)',
      Cost: 1000,
    },
    {
      Name: 'Techtool',
      Name_DE: 'Techtool',
      Description: 'An all-in-one multitool.',
      Description_DE: 'Ein All-in-One-Multitool.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Tent and Camping Equipment',
      Name_DE: 'Zelte und Campingausrüstung',
      Description: 'Gear for one person to camp.',
      Description_DE: 'Ausrüstung für eine Person zum Zelten.',
      CostDescription: '50eb (Costly)',
      Cost: 50,
    },
    {
      Name: 'Vial of Biotoxin',
      Name_DE: 'Fläschchen mit Biotoxin',
      Description:
        'Does damage 3d6. Resisted by Resist Torture/Drugs. Not affected by armor.',
      Description_DE:
        'Macht 3d6 Schaden. Widersteht Folter/Drogen widerstehen. Wird nicht von Rüstung beeinflusst.',
      CostDescription: '500eb (Expensive)',
      Cost: 500,
    },
    {
      Name: 'Vial of Poison',
      Name_DE: 'Fläschchen mit Gift',
      Description:
        'Does damage 2d6. Resisted by Resist Torture/Drugs. Not affected by armor.',
      Description_DE:
        'Verursacht 2d6 Schaden. Widersteht Folter/Drogen widerstehen. Wird nicht von Rüstung beeinflusst.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Video Camera',
      Name_DE: 'Videokamera',
      Description:
        'Record up to 12 hours of audio and video on a single memory chip.',
      Description_DE:
        'Nehmen Sie bis zu 12 Stunden Audio- und Videomaterial auf einem einzigen Speicherchip auf.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
    {
      Name: 'Virtuality Goggles',
      Name_DE: 'Virtualitätsbrille',
      Description: 'Projects cyberspace imagery over real world view.',
      Description_DE:
        'Projiziert Bilder aus dem Cyberspace über die reale Weltansicht.',
      CostDescription: '100eb (Premium)',
      Cost: 100,
    },
  ];
}
