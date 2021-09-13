import { CyberwareCategory } from '../models/cyberware';

export function getAllCyberware(): CyberwareCategory[] {
  return [
    {
      Name: 'Fashionware',
      Cyberware: [
        {
          Name: 'Biomonitor',
          Name_DE: 'Biomonitor',
          Install: 'Mall',
          DescriptionAndData:
            'Subdermal implant which generates a readout of vitals. Can link to Agent.',
          Description_DE:
            'Subdermales Implantat, das eine Anzeige der Vitalwerte erzeugt. Kann mit dem Agenten verbunden werden.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
        {
          Name: 'Chemskin',
          Name_DE: 'Kammfell',
          Install: 'Mall',
          DescriptionAndData:
            'Dyes and pigments infused into the skin to permanently change its hue. \u002B2 to Personal Grooming if user also has Techhair.',
          Description_DE:
            'Farbstoffe und Pigmente, die in die Haut eingearbeitet werden, um ihren Farbton dauerhaft zu ver\u00E4ndern. \u002B2 zu Personal Grooming, wenn der Benutzer auch Techhair hat.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
        {
          Name: 'EMP Threading',
          Name_DE: 'EMP-Gewindeschneiden',
          Install: 'Mall',
          DescriptionAndData:
            'Thin silver lines that run in circuit-like patterns across the body.',
          Description_DE:
            'D\u00FCnne silberne Linien, die in kreisf\u00F6rmigen Mustern \u00FCber den K\u00F6rper verlaufen.',
          CostDescription: '10eb(Cheap)',
          Cost: 10,
          HL: '0(N/A)',
        },
        {
          Name: 'Light Tattoo',
          Name_DE: 'Licht-Tattoo',
          Install: 'Mall',
          DescriptionAndData:
            'Subdermal patches store light and project colored tattoos under the skin. \u002B2 to Wardrobe and Style if user has three or more tattoos.',
          Description_DE:
            'Subdermale Pflaster speichern Licht und projizieren farbige Tattoos unter die Haut. \u002B2 zu Garderobe und Stil, wenn der Benutzer drei oder mehr Tattoos hat.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
        {
          Name: 'Shift Tacts',
          Name_DE: 'Verschiebungstaktiken',
          Install: 'Mall',
          DescriptionAndData: 'Color-changing lenses implanted into the eye.',
          Description_DE:
            'Farbwechselnde Linsen, die in das Auge implantiert werden.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
        {
          Name: 'Skinwatch',
          Name_DE: 'Skinwatch',
          Install: 'Mall',
          DescriptionAndData: 'Subdermally implanted LED watch.',
          Description_DE: 'Subkutan implantierte LED-Uhr.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
        {
          Name: 'Techhair',
          Name_DE: 'Techhair',
          Install: 'Mall',
          DescriptionAndData:
            'Color-light-emitting artificial hair. \u002B2 to Personal Grooming if user also has Chemskin.',
          Description_DE:
            'Farblicht-emittierendes Kunsthaar. \u002B2 zu Personal Grooming, wenn der Benutzer auch Chemskin hat.',
          CostDescription: '100eb(Premium)',
          Cost: 100,
          HL: '0(N/A)',
        },
      ],
    },
    {
      Name: 'Neuralware (Foundational Cyberware: Neural Link)',
      Cyberware: [
        {
          Name: 'Neural Link',
          Name_DE: 'Neuronale Verbindung',
          Install: 'Clinic',
          DescriptionAndData:
            'Wired artificial nervous system. Required to use Neuralware and Subdermal Grip. Has 5 Option Slots.',
          Description_DE:
            'Verkabeltes k\u00FCnstliches Nervensystem. Erforderlich f\u00FCr die Verwendung von Neuralware und Subdermal Grip. Hat 5 Optionssteckpl\u00E4tze.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Braindance Recorder',
          Name_DE: 'Braindance Blockfl\u00F6te',
          Install: 'Clinic',
          DescriptionAndData:
            'Records user\u0027s experiences to memory chip or external device. Requires Neural Link.',
          Description_DE:
            'Zeichnet die Erfahrungen des Benutzers auf einem Speicherchip oder einem externen Ger\u00E4t auf. Erfordert Neural Link.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Chipware Socket',
          Name_DE: 'Chipware-Sockel',
          Install: 'Clinic',
          DescriptionAndData:
            'A single socket installed in back of the neck. Required to use Chipware. Requires Neural Link.',
          Description_DE:
            'Ein einzelner Sockel, der im Nacken installiert ist. F\u00FCr die Verwendung von Chipware erforderlich. Erfordert Neural Link.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Interface Plugs',
          Name_DE: 'Interface-Stecker',
          Install: 'Clinic',
          DescriptionAndData:
            'Plugs in wrist or head that allow connection to machines. Requires Neural Link.',
          Description_DE:
            'Stecker am Handgelenk oder Kopf, die eine Verbindung zu Maschinen erm\u00F6glichen. Erfordert Neural Link.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Kerenzikov',
          Name_DE: 'Kerenzikow',
          Install: 'Clinic',
          DescriptionAndData:
            'Speedware. User adds \u002B2 to Initiative. Only 1 piece of Speedware can be installed at a time. Requires Neural Link.',
          Description_DE:
            'Speedware. Der Benutzer erh\u00E4lt \u002B2 zur Initiative. Es kann jeweils nur 1 St\u00FCck Speedware installiert werden. Erfordert Neural Link.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '14 (4d6)',
        },
        {
          Name: 'Sandevistan',
          Name_DE: 'Sandevistan',
          Install: 'Clinic',
          DescriptionAndData:
            'Speedware. When activated as an Action adds \u002B3 to Initiative for one minute. Has 1 hour cool down period. Only 1 piece of Speedware can be installed at a time. Requires Neural Link.',
          Description_DE:
            'Speedware. Wenn sie als Aktion aktiviert wird, erh\u00F6ht sie die Initiative f\u00FCr eine Minute um \u002B3. Hat eine Abk\u00FChlungszeit von 1 Stunde. Es kann jeweils nur 1 St\u00FCck Speedware installiert werden. Erfordert Neural Link.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Chemical Analyzer',
          Name_DE: 'Chemischer Analyzer',
          Install: 'N/A',
          DescriptionAndData:
            'Chipware. Tests substance for precise chemical composition and compares to a database. Requires Chipware Socket.',
          Description_DE:
            'Chipware. Pr\u00FCft eine Substanz auf ihre genaue chemische Zusammensetzung und vergleicht sie mit einer Datenbank. Erfordert Chipware-Sockel.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Memory Chip',
          Name_DE: 'Speicherchip',
          Install: 'N/A',
          DescriptionAndData:
            'Data storage. User\u0027s cyberware can store or access data on it.',
          Description_DE:
            'Datenspeicherung. Die Cyberware des Nutzers kann Daten darauf speichern oder darauf zugreifen.',
          CostDescription: '10eb (Cheap)',
          Cost: 10,
          HL: '0 (N/A)',
        },
        {
          Name: 'Olfactory Boost',
          Name_DE: 'Olfaktorischer Schub',
          Install: 'N/A',
          DescriptionAndData:
            'Chipware. User can use Tracking Skill to track via scent. Requires Chipware Socket.',
          Description_DE:
            'Chipware. Benutzer kann Tracking Skill verwenden, um \u00FCber Duftstoffe zu verfolgen. Ben\u00F6tigt Chipware-Sockel.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
        {
          Name: 'Pain Editor',
          Name_DE: 'Schmerz-Editor',
          Install: 'N/A',
          DescriptionAndData:
            'Chipware. User ignores penalties due to being Seriously Wounded. Requires Chipware Socket.',
          Description_DE:
            'Chipware. Der Benutzer ignoriert die Strafen, die durch eine schwere Verwundung verursacht werden. Ben\u00F6tigt Chipware-Sockel.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Skill Chip',
          Name_DE: 'Geschicklichkeits-Chip',
          Install: 'N/A',
          DescriptionAndData:
            'Chipware. User has specific Skill at Level 3 unless Skill is already 3\u002B. Skill Chips for (x2) cost Skills cost more. Requires Chipware Socket.',
          Description_DE:
            'Chipware. Der Benutzer hat eine bestimmte Fertigkeit auf Stufe 3, es sei denn, die Fertigkeit ist bereits 3\u002B. Skill-Chips f\u00FCr (x2) kosten Skills kosten mehr. Ben\u00F6tigt Chipware-Sockel.',
          CostDescription: '500eb (Expensive) or 1000eb (V. Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Tactile Boost',
          Name_DE: 'Taktile Verst\u00E4rkung',
          Install: 'N/A',
          DescriptionAndData:
            'Chipware. User can detect motion within 20m/yd by placing hand on surface. Requires Chipware Socket.',
          Description_DE:
            'Chipware. Der Benutzer kann Bewegungen innerhalb von 20m/yd erkennen, indem er die Hand auf die Oberfl\u00E4che legt. Erfordert Chipware-Sockel.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
      ],
    },
    {
      Name: 'Cyberoptics (Founda tional Cyberware: Cybereye)',
      Cyberware: [
        {
          Name: 'Cybereye',
          Name_DE: 'Cybereye',
          Install: 'Clinic',
          DescriptionAndData:
            'Artificial Eye. Each Cybereye has 3 Option Slots. Some options must be paired (purchased twice and installed in two different Cybereyes on a user. HL must be paid for each).',
          Description_DE:
            'K\u00FCnstliches Auge. Jedes Cybereye hat 3 Optionssteckpl\u00E4tze. Einige Optionen m\u00FCssen gepaart werden (zweimal gekauft und in zwei verschiedenen Cybereyes eines Benutzers installiert. HL muss f\u00FCr jede Option bezahlt werden).',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
        {
          Name: 'Anti-Dazzle',
          Name_DE: 'Blendschutz',
          Install: 'Mall',
          DescriptionAndData:
            'User immune to effects caused by flashes of light. Requires two Cybereyes and must be paired.',
          Description_DE:
            'Benutzer immun gegen Effekte, die durch Lichtblitze verursacht werden. Ben\u00F6tigt zwei Cybereyes und muss gepaart werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Chyron',
          Name_DE: 'Chyron',
          Install: 'Mall',
          DescriptionAndData:
            'Projects subscreen into user\u0027s field of vision. Requires a Cybereye.',
          Description_DE:
            'Projiziert einen Teil des Bildschirms in das Sichtfeld des Benutzers. Erfordert ein Cybereye.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Color Shift',
          Name_DE: 'Farbverschiebung',
          Install: 'Mall',
          DescriptionAndData:
            'Unlimited color and pattern changes for the eye. Requires a Cybereye.',
          Description_DE:
            'Unbegrenzte Farb- und Muster\u00E4nderungen f\u00FCr das Auge. Erfordert ein Cybereye.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Dartgun',
          Name_DE: 'Dartgun',
          Install: 'Clinic',
          DescriptionAndData:
            'Single shot Dartgun Exotic Weapon concealed in eye. Requires a Cybereye and takes 3 Option Slots.',
          Description_DE:
            'Exotische Einzelschuss-Pfeilwaffe, die im Auge verborgen ist. Ben\u00F6tigt ein Cybereye und nimmt 3 Optionspl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Image Enhance',
          Name_DE: 'Bildverbesserung',
          Install: 'Mall',
          DescriptionAndData:
            'Adds \u002B2 to Perception, Lip Reading, and Conceal/Reveal Object. Requires two Cybereyes and must be paired.',
          Description_DE:
            'Erh\u00F6ht die Werte f\u00FCr Wahrnehmung, Lippenlesen und Objekt verbergen/verstecken um \u002B2. Ben\u00F6tigt zwei Cybereyes und muss gepaart werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Low Light / Infrared / UV',
          Name_DE: 'Schwachlicht / Infrarot / UV',
          Install: 'Mall',
          DescriptionAndData:
            'User can ignore penalties due to darkness, smoke, fog, etc. Requires two Cybereyes, must be paired, and takes 2 Option Slots per Cybereye.',
          Description_DE:
            'Der Benutzer kann Strafen aufgrund von Dunkelheit, Rauch, Nebel usw. ignorieren. Erfordert zwei Cybereyes, muss gepaart werden und ben\u00F6tigt 2 Optionspl\u00E4tze pro Cybereye.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'MicroOptics',
          Name_DE: 'MikroOptik',
          Install: 'Clinic',
          DescriptionAndData:
            'Provides user with 400x magnification. Requires a Cybereye.',
          Description_DE:
            'Bietet dem Benutzer eine 400-fache Vergr\u00F6\u00DFerung. Erfordert ein Cybereye.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'MicroVideo',
          Name_DE: 'MicroVideo',
          Install: 'Clinic',
          DescriptionAndData:
            'Camera in eye. Records audio and video to Memory Chip or linked Agent. Requires a Cybereye and takes 2 Option Slots.',
          Description_DE:
            'Kamera im Auge. Zeichnet Audio und Video auf einem Speicherchip oder einem verkn\u00FCpften Agenten auf. Ben\u00F6tigt ein Cybereye und nimmt 2 Optionssteckpl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Radiation Detector',
          Name_DE: 'Strahlungsdetektor',
          Install: 'Clinic',
          DescriptionAndData:
            'Radiation readings within 100m/yds displayed in form of blue glow. Requires a Cybereye.',
          Description_DE:
            'Strahlungswerte innerhalb von 100m/yds werden in Form von blauem Leuchten angezeigt. Erfordert ein Cybereye.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '3 (1d6)',
        },
        {
          Name: 'Targeting Scope',
          Name_DE: 'Umfang der Zielsetzung',
          Install: 'Clinic',
          DescriptionAndData:
            'Adds \u002B1 to Check when making Aimed Shot. Requires a Cybereye.',
          Description_DE:
            'Erh\u00F6ht den Check f\u00FCr gezielte Sch\u00FCsse um \u002B1. Erfordert ein Cybereye.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'TeleOptics',
          Name_DE: 'TeleOptik',
          Install: 'Clinic',
          DescriptionAndData:
            'Can see detail up to 800m/yd away. \u002B1 to Aimed Shots against target 51m/yds or farther away. Requires a Cybereye.',
          Description_DE:
            'Kann Details in bis zu 800m/yd Entfernung erkennen. \u002B1 auf gezielte Sch\u00FCsse auf ein Ziel, das 51 m oder weiter entfernt ist. Erfordert ein Cybereye.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Virtuality',
          Name_DE: 'Virtualit\u00E4t',
          Install: 'Mall',
          DescriptionAndData:
            'Projects cyberspace imagery over user\u0027s view of the world. Requires two Cybereyes and must be paired.',
          Description_DE:
            'Projiziert Cyberspace-Bilder \u00FCber die Sicht des Benutzers auf die Welt. Ben\u00F6tigt zwei Cybereyes und muss gepaart werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
      ],
    },
    {
      Name: 'Cyberaudio (Founda tional Cyberware: Cyberaudio Suite)',
      Cyberware: [
        {
          Name: 'Cyberaudio Suite',
          Name_DE: 'Cyberaudio Suite',
          Install: 'Clinic',
          DescriptionAndData: 'Has 3 Option Slots. Cannot install more than 1.',
          Description_DE:
            'Hat 3 Optionssteckpl\u00E4tze. Kann nicht mehr als 1 installieren.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Amplified Hearing',
          Name_DE: 'Verst\u00E4rktes Geh\u00F6r',
          Install: 'Mall',
          DescriptionAndData:
            '\u002B2 to Perception for Checks involving hearing. Requires a Cyberaudio Suite.',
          Description_DE:
            '\u002B2 auf Wahrnehmung bei Checks, die das Geh\u00F6r betreffen. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Audio Recorder',
          Name_DE: 'Audio-Recorder',
          Install: 'Clinic',
          DescriptionAndData:
            'Records audio to Memory Chip or linked Agent. Requires a Cyberaudio Suite.',
          Description_DE:
            'Zeichnet Audio auf einem Memory Chip oder einem verkn\u00FCpften Agent auf. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Bug Detector',
          Name_DE: 'Wanzendetektor',
          Install: 'Mall',
          DescriptionAndData:
            'Beeps when within 2m/yds of a listening device. Requires a Cyberaudio Suite.',
          Description_DE:
            'Piepst, wenn es sich in einer Entfernung von 2 m von einem H\u00F6rger\u00E4t befindet. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Homing Tracer',
          Name_DE: 'Zielsuchende F\u00E4hrte',
          Install: 'Clinic',
          DescriptionAndData:
            'Can follow a linked tracer up to 1 mile away. Requires a Cyberaudio Suite.',
          Description_DE:
            'Kann einen verkn\u00FCpften Tracer bis zu einer Entfernung von 1 Meile verfolgen. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Internal Agent',
          Name_DE: 'Interner Agent',
          Install: 'Mall',
          DescriptionAndData:
            'Fully functional Agent installed internally. Can be linked to a Cybereye with Chyron display. Otherwise, audio only. Requires a Cyberaudio Suite.',
          Description_DE:
            'Voll funktionsf\u00E4higer, intern installierter Agent. Kann mit einem Cybereye mit Chyron-Anzeige verbunden werden. Ansonsten nur Audio. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Level Damper',
          Name_DE: 'Niveau-D\u00E4mpfer',
          Install: 'Mall',
          DescriptionAndData:
            'User immune to effects caused by loud noises. Requires a Cyberaudio Suite.',
          Description_DE:
            'Der Benutzer ist immun gegen Effekte, die durch laute Ger\u00E4usche verursacht werden. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Radio Communicator',
          Name_DE: 'Radio-Kommunikator',
          Install: 'Mall',
          DescriptionAndData:
            'User can communicate via radio. 1 mile range. Requires a Cyberaudio Suite.',
          Description_DE:
            'Der Benutzer kann \u00FCber Funk kommunizieren. Reichweite: 1 Meile. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Radio Scanner / Music Player',
          Name_DE: 'Radioscanner / Musikspieler',
          Install: 'Clinic',
          DescriptionAndData:
            'Can play music from Data Pool or Memory Chip or tune into radio broadcasts within 1 mile. Requires a Cyberaudio Suite.',
          Description_DE:
            'Kann Musik aus dem Datenpool oder Speicherchip abspielen oder Radiosendungen im Umkreis von 1 Meile empfangen. Erfordert eine Cyberaudio Suite.',
          CostDescription: '50eb (Costly)',
          Cost: 50,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Radar Detector',
          Name_DE: 'Radarwarner',
          Install: 'Clinic',
          DescriptionAndData:
            'Beeps if active radar beam is within 100m/yd. Requires a Cyberaudio Suite.',
          Description_DE:
            'Piepst, wenn sich der aktive Radarstrahl innerhalb von 100m/yd befindet. Erfordert eine Cyberaudio Suite.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Scrambler / Descrambler',
          Name_DE: 'Scrambler / Descrambler',
          Install: 'Mall',
          DescriptionAndData:
            'Allows user to scramble outgoing communications and descramble incoming communications. Requires a Cyberaudio Suite.',
          Description_DE:
            'Erm\u00F6glicht es dem Benutzer, ausgehende Kommunikation zu verschl\u00FCsseln und eingehende Kommunikation zu entschl\u00FCsseln. Erfordert eine Cyberaudio Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Voice Stress Analyzer',
          Name_DE: 'Stimm-Stress-Analysator',
          Install: 'Mall',
          DescriptionAndData:
            '\u002B2 to Human Perception and Interrogation Checks. Requires a Cyberaudio Suite.',
          Description_DE:
            '\u002B2 bei menschlichen Wahrnehmungs- und Verh\u00F6rchecks. Erfordert eine Cyberaudio-Suite.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
      ],
    },
    {
      Name: 'Internal Cyberware (7 Option Slots Available)',
      Cyberware: [
        {
          Name: 'AudioVox',
          Name_DE: 'AudioVox',
          Install: 'Clinic',
          DescriptionAndData:
            'Voice synthesizer. Adds \u002B2 to Acting and Play Instrument when singing.',
          Description_DE:
            'Stimmsynthesizer. F\u00FCgt \u002B2 zu Schauspielerei und Instrument spielen beim Singen hinzu.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Contraceptive Implant',
          Name_DE: 'Empf\u00E4ngnisverh\u00FCtendes Implantat',
          Install: 'Mall',
          DescriptionAndData: 'Prevents undesired pregnancy.',
          Description_DE: 'Verhindert eine unerw\u00FCnschte Schwangerschaft.',
          CostDescription: '10eb (Cheap)',
          Cost: 10,
          HL: '0 (N/A)',
        },
        {
          Name: 'Enhanced Antibodies',
          Name_DE: 'Verbesserte Antik\u00F6rper',
          Install: 'Mall',
          DescriptionAndData:
            'After stabilization, user heals BODY x 2 for each day spent resting.',
          Description_DE:
            'Nach der Stabilisierung heilt der Benutzer K\u00D6RPER x 2 f\u00FCr jeden Tag, an dem er ruht.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Cybersnake',
          Name_DE: 'Cyberschlange',
          Install: 'Hospital',
          DescriptionAndData:
            'Esophagus mounted Very Heavy Melee Weapon. Can be concealed.',
          Description_DE:
            'Speiser\u00F6hre montiert Sehr schwere Nahkampfwaffe. Kann verborgen werden.',
          CostDescription: '1,000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Gills',
          Name_DE: 'Kiemen',
          Install: 'Hospital',
          DescriptionAndData: 'User can breathe underwater.',
          Description_DE: 'Der Benutzer kann unter Wasser atmen.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '7 (2d6)',
        },
        {
          Name: 'Grafted Muscle and Bone Lace',
          Name_DE: 'Muskeltransplantate und Knochenspitzen',
          Install: 'Hospital',
          DescriptionAndData:
            'Increases BODY by 2. The increase changes HP, Wound Threshold, and Death Save. Cannot raise BODY above 10.',
          Description_DE:
            'Erh\u00F6ht den K\u00D6RPER um 2. Die Erh\u00F6hung ver\u00E4ndert die HP, die Wundschwelle und den Todessparer. Kann den K\u00D6RPER nicht \u00FCber 10 erh\u00F6hen.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Independent Air Supply',
          Name_DE: 'Unabh\u00E4ngige Luftversorgung',
          Install: 'Hospital',
          DescriptionAndData:
            'Provides 30 minutes of oxygen. Takes 1 hour to refill from ambient atmosphere.',
          Description_DE:
            'Liefert 30 Minuten lang Sauerstoff. Das Wiederauff\u00FCllen aus der Umgebungsatmosph\u00E4re dauert 1 Stunde.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Midnight Lady\u2122 Sexual Implant',
          Name_DE: 'Midnight Lady\u2122 Sexuelles Implantat',
          Install: 'Clinic',
          DescriptionAndData: 'Be a Venus, be the fire, be desire.',
          Description_DE: 'Sei eine Venus, sei das Feuer, sei der Wunsch.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
        {
          Name: 'Mr. Studd\u2122 Sexual Implant',
          Name_DE: 'Mr. Studd\u2122 Sexual Implant',
          Install: 'Clinic',
          DescriptionAndData:
            'All night, every night, and they\u0027ll never know.',
          Description_DE:
            'Die ganze Nacht, jede Nacht, und sie werden es nie erfahren.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
        {
          Name: 'Nasal Filters',
          Name_DE: 'Nasal Filters',
          Install: 'Clinic',
          DescriptionAndData:
            'User immune to effects of toxic gases, fumes, and similar dangers.',
          Description_DE:
            'Der Benutzer ist immun gegen die Auswirkungen von giftigen Gasen, D\u00E4mpfen und \u00E4hnlichen Gefahren.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Radar / Sonar Implant',
          Name_DE: 'Radar-/Sonar-Implantat',
          Install: 'Clinic',
          DescriptionAndData:
            'Scans terrain within 50m/yds. Cannot scan through cover.',
          Description_DE:
            'Scannt das Gel\u00E4nde innerhalb von 50m/yds. Kann nicht durch Deckung scannen.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '7 (2d6)',
        },
        {
          Name: 'Toxin Binders',
          Name_DE: 'Toxin Binders',
          Install: 'Clinic',
          DescriptionAndData: 'Adds \u002B2 to Resist Torture/Drugs.',
          Description_DE:
            'F\u00FCgt \u002B2 zu Widerstand gegen Folter/Drogen hinzu.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Vampyres',
          Name_DE: 'Vampire',
          Install: 'Clinic',
          DescriptionAndData:
            'Excellent Quality Light Melee Weapon implanted in mouth. Can be concealed. User can add Poison or Biotoxin.',
          Description_DE:
            'Leichte Nahkampfwaffe von hervorragender Qualit\u00E4t, in den Mund implantiert. Kann verborgen werden. Der Benutzer kann Gift oder Biotoxin hinzuf\u00FCgen.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '14 (4d6)',
        },
      ],
    },
    {
      Name: 'External Cyberware (7 Option Slots Available)',
      Cyberware: [
        {
          Name: 'Hidden Holster',
          Name_DE: 'Verstecktes Holster',
          Install: 'Clinic',
          DescriptionAndData:
            'Can store weapon capable of concealment inside body.',
          Description_DE:
            'Kann eine Waffe verdeckt im K\u00F6rper aufbewahren.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Skin Weave',
          Name_DE: 'Skin Weave',
          Install: 'Hospital',
          DescriptionAndData:
            'User\u0027s body and head armored at SP7. Does not stack with worn Armor. Ablates. Recovers 1 SP per day of rest.',
          Description_DE:
            'K\u00F6rper und Kopf des Benutzers sind mit SP7 gepanzert. L\u00E4sst sich nicht mit getragener R\u00FCstung stapeln. Ablate. Erholt sich 1 SP pro Tag der Ruhe.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Subdermal Armor',
          Name_DE: 'Subdermale R\u00FCstung',
          Install: 'Hospital',
          DescriptionAndData:
            'User\u0027s body and head armored at SP11. Does not stack with worn Armor. Ablates. Recovers 1 SP per day of rest.',
          Description_DE:
            'K\u00F6rper und Kopf des Benutzers sind mit SP11 gepanzert. L\u00E4sst sich nicht mit getragener R\u00FCstung stapeln. Ablate. Erholt sich 1 SP pro Tag der Ruhe.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Subdermal Pocket',
          Name_DE: 'Subdermale Tasche',
          Install: 'Clinic',
          DescriptionAndData:
            '2\u0022 x 4\u0022 (5cm x 10cm) storage space just under the skin with RealSkinn\u2122 zipper.',
          Description_DE:
            '5 cm x 10 cm (2\u0022 x 4\u0022) gro\u00DFer Stauraum direkt unter der Haut mit RealSkinn\u2122-Rei\u00DFverschluss.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
      ],
    },
    {
      Name: 'Cyberlimbs (Founda tional Cyberware: Cyberarm or Cyberleg)',
      Cyberware: [
        {
          Name: 'Cyberarm',
          Name_DE: 'Cyberarm',
          Install: 'Hospital',
          DescriptionAndData:
            'Replacement arm. Has 4 Option Slots. Comes installed with Standard Hand that doesn\u0027t cause Humanity Loss or take up an Option Slot.',
          Description_DE:
            'Ersatzarm. Verf\u00FCgt \u00FCber 4 Optionsschlitze. Wird mit einer Standardhand geliefert, die keinen Menschlichkeitsverlust verursacht oder einen Optionssteckplatz belegt.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Standard Hand',
          Name_DE: 'Standard Hand',
          Install: 'Clinic',
          DescriptionAndData:
            'Standard cybernetic hand. Can be installed in a meat arm.',
          Description_DE:
            'Kybernetische Standardhand. Kann in einen Fleischarm eingebaut werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Big Knucks',
          Name_DE: 'Gro\u00DFe Knicks',
          Install: 'Clinic',
          DescriptionAndData:
            'Armored knuckles. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'Gepanzerte Schlagringe. Mittlere Nahkampfwaffe. Kann verborgen werden. Kann als einziges St\u00FCck Cyberware in einen Fleischarm eingebaut werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Cyberdeck',
          Name_DE: 'Cyberdeck',
          Install: 'Clinic',
          DescriptionAndData:
            'Cyberdeck installed in Cyberarm. Requires a Cyberarm and takes up 3 Option Slots.',
          Description_DE:
            'Cyberdeck installiert im Cyberarm. Erfordert einen Cyberarm und nimmt 3 Optionspl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Grapple Hand',
          Name_DE: 'Enterhaken Hand',
          Install: 'Clinic',
          DescriptionAndData:
            'Fires hand, along with a grapple line up to 30m/yds. Cannot be used as a weapon. Requires a Cyberarm.',
          Description_DE:
            'Feuert aus der Hand, zusammen mit einer Greiferlinie bis zu 30m/yds. Kann nicht als Waffe verwendet werden. Ben\u00F6tigt einen Cyberarm.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Medscanner',
          Name_DE: 'Medscanner',
          Install: 'Clinic',
          DescriptionAndData:
            'Medscanner installed in Cyberarm. Helps diagnose illness and injury. \u002B2 to First Aid and Paramedic. Requires a Cyberarm and takes 2 Option Slots.',
          Description_DE:
            'Medscanner installiert in Cyberarm. Hilft bei der Diagnose von Krankheiten und Verletzungen. \u002B2 f\u00FCr Erste Hilfe und Sanit\u00E4ter. Erfordert einen Cyberarm und ben\u00F6tigt 2 Optionspl\u00E4tze.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Popup Grenade Launcher',
          Name_DE: 'Popup-Granatwerfer',
          Install: 'Clinic',
          DescriptionAndData:
            'A single shot Grenade Launcher installed in a Cyberarm. Weapon can be concealed. Requires a Cyberarm and takes up 2 Option Slots.',
          Description_DE:
            'Ein Einzelschuss-Granatwerfer, der in einen Cyberarm eingebaut ist. Die Waffe kann verdeckt werden. Ben\u00F6tigt einen Cyberarm und nimmt 2 Optionspl\u00E4tze in Anspruch.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Popup Melee Weapon',
          Name_DE: 'Popup-Nahkampfwaffe',
          Install: 'Clinic',
          DescriptionAndData:
            'Any Light, Medium, or Heavy Melee Weapon installed in a Cyberarm. Weapon can be concealed even if not normally concealable. Requires a Cyberarm and takes up 2 Option Slots.',
          Description_DE:
            'Jede leichte, mittlere oder schwere Nahkampfwaffe, die in einer Cyberwaffe installiert ist. Die Waffe kann verdeckt werden, auch wenn sie normalerweise nicht verdeckt werden kann. Ben\u00F6tigt einen Cyberarm und nimmt 2 Optionspl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Popup Shield',
          Name_DE: 'Popup-Schild',
          Install: 'Clinic',
          DescriptionAndData:
            'A Bulletproof Shield installed in the Cyberarm. Can be concealed and replaced when at 0 HP. Requires a Cyberarm and takes up 3 Option Slots.',
          Description_DE:
            'Ein kugelsicherer Schild, der in den Cyberarm eingebaut ist. Kann verborgen und ersetzt werden, wenn er 0 HP hat. Erfordert einen Cyberarm und nimmt 3 Optionspl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Popup Ranged Weapon',
          Name_DE: 'Popup-Fernkampfwaffe',
          Install: 'Clinic',
          DescriptionAndData:
            'Any One Handed Ranged Weapon installed in a Cyberarm. Weapon can be concealed even if not normally concealable. Requires a Cyberarm and takes up 2 Option Slots.',
          Description_DE:
            'Jede Einhand-Fernkampfwaffe, die in einen Cyberarm eingebaut ist. Die Waffe kann verdeckt werden, auch wenn sie normalerweise nicht verdeckt werden kann. Erfordert einen Cyberarm und nimmt 2 Optionspl\u00E4tze ein.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Quick Change Mount',
          Name_DE: 'Schnellwechselhalterung',
          Install: 'Clinic',
          DescriptionAndData:
            'Allows user to remove or install a Cyberarm as an Action.',
          Description_DE:
            'Erm\u00F6glicht dem Benutzer, einen Cyberarm als Aktion zu entfernen oder zu installieren.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '7 (2d6)',
        },
        {
          Name: 'Rippers',
          Name_DE: 'Ripper',
          Install: 'Clinic',
          DescriptionAndData:
            'Carbo-glass claws. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'Karboglas-Klauen. Mittlere Nahkampfwaffe. Kann verborgen werden. Kann als einziges St\u00FCck Cyberware in einen Fleischarm eingebaut werden.',
          CostDescription: '500eb (Expensive',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Scratchers',
          Name_DE: 'Rubbellose',
          Install: 'Mall',
          DescriptionAndData:
            'Carbo-glass fingernails. Light Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'Fingern\u00E4gel aus Karbonglas. Leichte Nahkampfwaffe. Kann verborgen werden. Kann als einziges St\u00FCck Cyberware in einen Fleischarm eingebaut werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Shoulder Cam',
          Name_DE: 'Schulternocken',
          Install: 'Clinic',
          DescriptionAndData:
            'Video camera mounted in shoulder. Can be concealed. Requires a Cyberarm and takes up 2 Option Slots.',
          Description_DE:
            'An der Schulter montierte Videokamera. Kann verdeckt werden. Erfordert einen Cyberarm und nimmt 2 Optionspl\u00E4tze in Anspruch.',
          CostDescription: '500eb (Expensive',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Slice \u2018N Dice',
          Name_DE: 'Slice \u0027N Dice',
          Install: 'Clinic',
          DescriptionAndData:
            'Monofilament whip implanted in the thumb. Medium Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'In den Daumen implantierte Monofilament-Peitsche. Mittlere Nahkampfwaffe. Kann versteckt werden. Kann als einziges St\u00FCck Cyberware in einem Fleischarm installiert werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Subdermal Grip',
          Name_DE: 'Subdermal Grip',
          Install: 'Clinic',
          DescriptionAndData:
            'Allows user to use Smartgun without Interface Plug. Can be installed as only piece of Cyberware in a meat arm. Requires Neural Link.',
          Description_DE:
            'Erm\u00F6glicht dem Benutzer die Verwendung der Smartgun ohne Interface Plug. Kann als einziges St\u00FCck Cyberware in einem Fleischarm installiert werden. Erfordert Neural Link.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Techscanner',
          Name_DE: 'Techscanner',
          Install: 'Clinic',
          DescriptionAndData:
            'Techscanner installed in Cyberarm. Helps diagnose broken tech. \u002B2 to multiple TECH-based Skills. Requires a Cyberarm and takes 2 Option Slots.',
          Description_DE:
            'Techscanner in Cyberarm installiert. Hilft bei der Diagnose von defekter Technik. \u002B2 auf mehrere TECH-basierte Fertigkeiten. Ben\u00F6tigt einen Cyberarm und nimmt 2 Optionspl\u00E4tze in Anspruch.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Tool Hand',
          Name_DE: 'Tool Hand',
          Install: 'Clinic',
          DescriptionAndData:
            'Fingers contain screwdriver, wrench, small drill, and other tools. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'Die Finger enthalten Schraubenzieher, Schraubenschl\u00FCssel, kleine Bohrer und andere Werkzeuge. Kann als einziges St\u00FCck Cyberware in einem Fleischarm installiert werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Wolvers',
          Name_DE: 'W\u00F6lfe',
          Install: 'Clinic',
          DescriptionAndData:
            'Long claws extended from the knuckles. Heavy Melee Weapon. Can be concealed. Can be installed as only piece of Cyberware in a meat arm.',
          Description_DE:
            'Lange Krallen, die aus den Fingerkn\u00F6cheln herausragen. Schwere Nahkampfwaffe. Kann verborgen werden. Kann als einziges St\u00FCck Cyberware in einen Fleischarm eingebaut werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '7 (2d6)',
        },
        {
          Name: 'Cyberleg',
          Name_DE: 'Cyberleg',
          Install: 'Hospital',
          DescriptionAndData:
            'Replacement leg. Has 3 Option Slots. Comes installed with Standard Foot that doesn\u0027t cause Humanity Loss or take up an Option Slot. Most Cyberleg options must be paired (purchased twice and installed in two different Cyberlegs on a user. HL must be paid for each).',
          Description_DE:
            'Ersatzbein. Hat 3 Option Slots. Wird mit einem Standardfu\u00DF installiert, der keinen Humanit\u00E4tsverlust verursacht oder einen Optionsplatz belegt. Die meisten Cyberleg-Optionen m\u00FCssen gepaart werden (zweimal gekauft und in zwei verschiedenen Cyberlegs eines Benutzers installiert. HL muss f\u00FCr jedes bezahlt werden).',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '3 (1d6)',
        },
        {
          Name: 'Standard Foot',
          Name_DE: 'Standard-Fu\u00DF',
          Install: 'Clinic',
          DescriptionAndData:
            'Standard cybernetic foot. Can be installed in a meat leg.',
          Description_DE:
            'Kybernetischer Standardfu\u00DF. Kann in ein Fleischbein eingebaut werden.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '2 (1d6/2 Round up)',
        },
        {
          Name: 'Grip Foot',
          Name_DE: 'Grip Fu\u00DF',
          Install: 'Clinic',
          DescriptionAndData:
            'Traction enhanced. Negates movement penalty when climbing. Requires two Cyberlegs and must be paired.',
          Description_DE:
            'Traktion verbessert. Negiert den Bewegungsabzug beim Klettern. Erfordert zwei Cyberlegs und muss gepaart werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Jump Booster',
          Name_DE: 'Sprungkraftverst\u00E4rker',
          Install: 'Clinic',
          DescriptionAndData:
            'Hydraulics in legs. Negates movement penalty when jumping. Requires two Cyberlegs, takes up 2 Option Slots, and must be paired.',
          Description_DE:
            'Hydraulik in den Beinen. Negiert den Bewegungsnachteil beim Springen. Ben\u00F6tigt zwei Cyberlegs, nimmt 2 Optionspl\u00E4tze ein und muss gepaart werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Skate Foot',
          Name_DE: 'Rochenfu\u00DF',
          Install: 'Clinic',
          DescriptionAndData:
            'Inline skates built into feet. Can be concealed. Increases movement by 6m/yds when using Run Action. Requires two Cyberlegs and must be paired.',
          Description_DE:
            'In die F\u00FC\u00DFe integrierte Inline-Skates. K\u00F6nnen versteckt werden. Erh\u00F6ht die Bewegung um 6m/Yard, wenn die Aktion Laufen verwendet wird. Ben\u00F6tigt zwei Cyberlegs und muss gepaart werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Talon Foot',
          Name_DE: 'Talon-Fu\u00DF',
          Install: 'Clinic',
          DescriptionAndData:
            'Blade mounted in foot. Light Melee Weapon. Can be concealed. Can be installed as the only piece of Cyberware in a meat leg.',
          Description_DE:
            'Klinge am Fu\u00DF montiert. Leichte Nahkampfwaffe. Kann verborgen werden. Kann als einziges St\u00FCck Cyberware in ein Fleischbein eingebaut werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Web Foot',
          Name_DE: 'Web-Fu\u00DF',
          Install: 'Clinic',
          DescriptionAndData:
            'Thin webbing between toes. Negates movement penalty when swimming. Requires Two Cyberlegs and must be paired.',
          Description_DE:
            'D\u00FCnnes Gurtband zwischen den Zehen. Negiert den Bewegungsnachteil beim Schwimmen. Erfordert zwei Cyberlegs und muss gepaart werden.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '3 (1d6)',
        },
        {
          Name: 'Hardened Shielding',
          Name_DE: 'Geh\u00E4rtete Abschirmung',
          Install: 'Clinic',
          DescriptionAndData:
            'Cyberlimb and installed options cannot be rendered inoperable by EMP pulses or Non-Black ICE Program effects. Requires Cyberarm or Cyberleg.',
          Description_DE:
            'Cyberlimb und installierte Optionen k\u00F6nnen nicht durch EMP-Impulse oder nicht-schwarze ICE-Programmeffekte unbrauchbar gemacht werden. Erfordert Cyberarm oder Cyberleg.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '3 (1d6)',
        },
        {
          Name: 'Plastic Covering',
          Name_DE: 'Kunststoffabdeckung',
          Install: 'Mall',
          DescriptionAndData:
            'Plastic coating for Cyberlimb. Available in wide variety of colors and patterns. Requires a Cyberarm or Cyberleg but does not take an Option Slot.',
          Description_DE:
            'Kunststoffbeschichtung f\u00FCr Cyberlimb. Erh\u00E4ltlich in einer gro\u00DFen Auswahl an Farben und Mustern. Erfordert einen Cyberarm oder ein Cyberbein, nimmt aber keinen Optionsplatz ein.',
          CostDescription: '100eb (Premium)',
          Cost: 100,
          HL: '0 (N/A)',
        },
        {
          Name: 'Realskinn\u2122 Covering',
          Name_DE: 'Realskinn\u2122-Belag',
          Install: 'Mall',
          DescriptionAndData:
            'Artificial skin coating for Cyberlimb. Requires a Cyberarm or Cyberleg but does not take an Option Slot.',
          Description_DE:
            'K\u00FCnstlicher Haut\u00FCberzug f\u00FCr Cyberlimb. Erfordert einen Cyberarm oder ein Cyberbein, ben\u00F6tigt aber keinen Optionsplatz.',
          CostDescription: '500eb (Expensive)',
          Cost: 500,
          HL: '0 (N/A)',
        },
        {
          Name: 'Superchrome\u00AE Covering',
          Name_DE: 'Superchrome\u00AE-Beschichtung',
          Install: 'Mall',
          DescriptionAndData:
            'Shiny metallic coating for Cyberlimb. \u002B2 to Wardrobe and Style. Requires a Cyberarm or Cyberleg but does not take an Option Slot.',
          Description_DE:
            'Gl\u00E4nzender Metall\u00FCberzug f\u00FCr Cyberlimb. \u002B2 auf Garderobe und Stil. Ben\u00F6tigt einen Cyberarm oder ein Cyberbein, nimmt aber keinen Optionsplatz ein.',
          CostDescription: '1000eb (V. Expensive)',
          Cost: 1000,
          HL: '0 (N/A)',
        },
      ],
    },
    {
      Name: 'Borgware',
      Cyberware: [
        {
          Name: 'Artificial Shoulder Mount',
          Name_DE: 'K\u00FCnstliche Schultermontage',
          Install: 'Hospital',
          DescriptionAndData:
            'User can mount 2 Cyberarms under first set of arms.',
          Description_DE:
            'Der Benutzer kann 2 Cyberarms unter dem ersten Armset montieren.',
          CostDescription: '1,000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Implanted Linear Frame \u00DF (Beta)',
          Name_DE: 'Implantierter linearer Rahmen \u00DF (Beta)',
          Install: 'Hospital',
          DescriptionAndData:
            'Enhanced skeleton and support structure. Increases BODY to 14. The increase changes HP, Wound Threshold, and Death Save. Requires BODY 8 and 2 Grafted Muscles and Bone Lace.',
          Description_DE:
            'Verbessertes Skelett und St\u00FCtzstruktur. Erh\u00F6ht K\u00D6RPER auf 14. Die Erh\u00F6hung ver\u00E4ndert die HP, die Wundschwelle und die Todesrettung. Erfordert K\u00D6RPER 8 und 2 aufgepfropfte Muskeln und Knochenspitze.',
          CostDescription: '5,000eb (Luxury)',
          Cost: 5000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Implanted Linear Frame \u03A3 (Sigma)',
          Name_DE: 'Implantierter linearer Rahmen \u03A3 (Sigma)',
          Install: 'Hospital',
          DescriptionAndData:
            'Enhanced skeleton and support structure. Increases BODY to 12. The increase changes HP, Wound Threshold, and Death Save. Requires BODY 6 and Grafted Muscles and Bone Lace.',
          Description_DE:
            'Verbessertes Skelett und St\u00FCtzstruktur. Erh\u00F6ht K\u00D6RPER auf 12. Die Erh\u00F6hung ver\u00E4ndert die HP, die Wundschwelle und die Todesrettung. Erfordert K\u00D6RPER 6 und gepfropfte Muskeln und Knochenspitze.',
          CostDescription: '1,000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'MultiOptic Mount',
          Name_DE: 'MultiOptische Halterung',
          Install: 'Hospital',
          DescriptionAndData: 'User can mount up to 5 additional Cybereyes.',
          Description_DE:
            'Der Benutzer kann bis zu 5 zus\u00E4tzliche Cybereyes montieren.',
          CostDescription: '1,000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
        {
          Name: 'Sensor Array',
          Name_DE: 'Sensor-Array',
          Install: 'Clinic',
          DescriptionAndData:
            'User can install up to 5 additional Cyberaudio Options. Requires Cyberaudio Suite but does not take up Cyberaudio Option Slot.',
          Description_DE:
            'Der Benutzer kann bis zu 5 zus\u00E4tzliche Cyberaudio-Optionen installieren. Ben\u00F6tigt Cyberaudio Suite, nimmt aber keinen Cyberaudio Option Slot in Anspruch.',
          CostDescription: '1,000eb (V. Expensive)',
          Cost: 1000,
          HL: '14 (4d6)',
        },
      ],
    },
  ];
}
