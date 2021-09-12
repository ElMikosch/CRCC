export function getAllAmunition() {
	return [
		{
			"Name_DE": "Basis-Munition",
			"Name": "Basic Ammunition",
			"Description": "This is the standard ammunition for the weapon. It has no special features.",
			"Description_DE": "Dies ist die Standardmunition für diese Waffe. Sie hat keine besonderen Eigenschaften.",
			"AmmoTypesAvailable": "All except Grenades and Rockets.",
			"CostDescription": "10eb (Cheap)",
			"Cost": 10
		},
		{
			"Name_DE": "Panzerbrechende Munition",
			"Name": "Armor-Piercing Ammunition",
			"Description": "When using this ammunition, you ablate armor by 2 instead of 1 whenever you would ablate armor.",
			"Description_DE": "Wenn du diese Munition verwendest, verringerst du deine Rüstung um 2 statt um 1, wann immer du Rüstung verringern würdest.",
			"AmmoTypesAvailable": "All except Shotgun Shells",
			"CostDescription": "100eb (Premium)",
			"Cost": 100
		},
		{
			"Name_DE": "Biotoxin-Munition",
			"Name": "Biotoxin Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone meat hit by your attack must instead attempt to beat a DV15 Resist Torture/Drugs Check. Anyone who fails is dealt 3d6 damage directly to their HP. Their armor isn't ablated because it wasn't interacted with.",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jeder, der von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV15-Test auf \"Folter/Drogen widerstehen\" zu bestehen. Jeder, der scheitert, erleidet 3d6 Schaden direkt an seinen HP. Ihre Rüstung wird nicht abgetragen, da nicht mit ihr interagiert wurde.",
			"AmmoTypesAvailable": "Arrows and Grenades only.",
			"CostDescription": "500eb (Expensive)",
			"Cost": 500
		},
		{
			"Name_DE": "EMP-Munition",
			"Name": "EMP Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone hit by your attack must instead attempt to beat a DV15 Cybertech Check. If they fail, the GM chooses 2 pieces of their Cyberware or carried electronics to become inoperable for 1 minute. Cyberlimbs that are rendered inoperable act as their meat counterparts do when they have been dismembered, but they still hang loosely. See Critical Injuries on pg. 187 .",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jeder, der von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV15 Cybertech-Check zu bestehen. Scheitert er, wählt der GM 2 Teile seiner Cyberware oder getragenen Elektronik aus, die für 1 Minute funktionsunfähig werden. Cyberlimbs, die funktionsunfähig gemacht werden, verhalten sich wie ihre fleischlichen Gegenstücke, wenn sie zerstückelt wurden, aber sie hängen immer noch locker. Siehe Kritische Verletzungen auf S. 187.",
			"AmmoTypesAvailable": "Grenades only.",
			"CostDescription": "500eb (Expensive)",
			"Cost": 500
		},
		{
			"Name_DE": "Expansive Munition",
			"Name": "Expa nsive Ammunition",
			"Description": "When using this ammunition, whenever you cause the Foreign Object Critical Injury, the victim rolls again on the Critical Injury table (see pg. 187) until they roll a Critical Injury that isn't Foreign Object. The victim then suffers that Critical Injury as well. This second injury deals no Bonus Damage.",
			"Description_DE": "Wenn du diese Munition verwendest, würfelt das Opfer jedes Mal, wenn du die kritische Verletzung Fremdkörper verursachst, erneut auf der Tabelle für kritische Verletzungen (siehe S. 187), bis es eine kritische Verletzung würfelt, die nicht Fremdkörper ist. Dann erleidet das Opfer auch diese kritische Verletzung. Diese zweite Verletzung verursacht keinen Bonusschaden.",
			"AmmoTypesAvailable": "Arrows, Bullets, and Slugs.",
			"CostDescription": "100eb (Premium)",
			"Cost": 100
		},
		{
			"Name_DE": "Blendgranaten-Munition",
			"Name": "Flashbang Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone hit by your attack must instead attempt to beat a DV15 Resist Torture/Drugs Check. Anyone who fails suffers the Damaged Eye and Damaged Ear Critical Injuries (see pg. 188) for the next minute. You do not take the Bonus Damage from the Critical Injuries.",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jeder, der von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV15-Test auf \"Folter/Drogen widerstehen\" zu bestehen. Jeder, der scheitert, erleidet für die nächste Minute die kritischen Verletzungen Beschädigtes Auge und Beschädigtes Ohr (siehe S. 188). Du nimmst den Bonusschaden der kritischen Verletzungen nicht an.",
			"AmmoTypesAvailable": "Grenades only.",
			"CostDescription": "100eb (Premium)",
			"Cost": 100
		},
		{
			"Name_DE": "Brandbombenmunition",
			"Name": "Incendiary Ammunition",
			"Description": "When using this ammunition, whenever you deal damage to a target through their armor, you ignite the target. Until your target spends an Action to put themselves out, they take 2 damage directly to their HP whenever they end their Turn. Multiple instances of this effect cannot stack.",
			"Description_DE": "Wenn du diese Munition verwendest, entzündest du das Ziel, sobald du ihm Schaden durch seine Rüstung zufügst. Bis dein Ziel eine Aktion ausgibt, um sich selbst zu löschen, erleidet es 2 Schaden direkt auf seine HP, wenn es seine Runde beendet. Mehrere Instanzen dieses Effekts können nicht gestapelt werden.",
			"AmmoTypesAvailable": "Arrows, Bullets, Grenades, and Shotgun Shells.",
			"CostDescription": "100eb (Premium)",
			"Cost": 100
		},
		{
			"Name_DE": "Giftmunition",
			"Name": "Poison Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone meat hit by your attack must instead attempt to beat a DV13 Resist Torture/Drugs Check. Anyone who fails is dealt 2d6 damage directly to their HP. Their armor isn't ablated because it wasn't interacted with.",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jeder, der von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV13-Test auf \"Folter/Drogen widerstehen\" zu bestehen. Jeder, der scheitert, erleidet 2d6 Schaden direkt an seinen HP. Ihre Rüstung wird nicht abgetragen, da nicht mit ihr interagiert wurde.",
			"AmmoTypesAvailable": "Arrows and Grenades only.",
			"CostDescription": "100eb (Premium)",
			"Cost": 100
		},
		{
			"Name_DE": "Gummi-Munition",
			"Name": "Rubber Ammunition",
			"Description": "Damage dealt using this ammunition cannot cause a Critical Injury. Additionally, attacks made with this ammunition cannot ablate armor. If damage dealt by this ammunition would reduce a target with more than 1 HP to less than 0 HP, they are instead left at 1 HP.",
			"Description_DE": "Schaden, der mit dieser Munition zugefügt wird, kann keine kritische Verletzung verursachen. Außerdem können Angriffe mit dieser Munition keine Rüstung abtragen. Wenn der mit dieser Munition verursachte Schaden ein Ziel mit mehr als 1 HP auf weniger als 0 HP reduzieren würde, hat es stattdessen noch 1 HP.",
			"AmmoTypesAvailable": "Arrows, Bullets, and Slugs.",
			"CostDescription": "10eb (Cheap)",
			"Cost": 10
		},
		{
			"Name_DE": "Schlaf-Munition",
			"Name": "Sleep Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone meat hit by your attack must instead attempt to beat a DV13 Resist Torture/Drugs Check. Anyone who fails is now Prone (see pg. 169) and Unconscious for 1 minute or until they are woken by taking damage, or by someone else using an Action that touches them.",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jeder, der von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV13-Test auf \"Folter/Drogen widerstehen\" zu bestehen. Jeder, der scheitert, liegt nun auf dem Boden (siehe S. 169) und ist 1 Minute lang bewusstlos oder bis er durch Schaden oder eine andere Aktion, die ihn berührt, geweckt wird.",
			"AmmoTypesAvailable": "Arrows and Grenades",
			"CostDescription": "500eb (Expensive)",
			"Cost": 500
		},
		{
			"Name_DE": "Intelligente Munition",
			"Name": "Smart Ammunition",
			"Description": "Targeting Scope Cyberware is required in order to make use of Smart Ammunition. When fired by a User without Targeting Scope Cyberware, Smart Ammunition won't fire even when the trigger is pulled, as a safety feature. When using this ammunition, whenever you miss a shot by 4 or less when using a weapon's single shot firing mode, your missed shot immediately has a second chance to hit your target. This second chance to hit is made by rolling again to hit the exact same shot DV on the range table which you missed, except that you add 10 to the d10 instead of anything you would typically add to the Check, with the only exception being LUCK. A target that can dodge bullets can choose to dodge this ranged attack as normal.",
			"Description_DE": "Die Zielfernrohr-Cyberware ist erforderlich, um die intelligente Munition zu verwenden. Wenn sie von einem Benutzer ohne Zielfernrohr-Cyberware abgefeuert wird, feuert die intelligente Munition aus Sicherheitsgründen nicht, selbst wenn der Abzug betätigt wird. Wenn du diese Munition verwendest, erhältst du, wenn du im Einzelschussmodus einer Waffe einen Schuss um 4 oder weniger verfehlst, sofort eine zweite Chance, dein Ziel zu treffen. Diese zweite Trefferchance wird durch einen erneuten Wurf auf genau denselben Schuss DV auf der Entfernungstabelle erzielt, den du verfehlt hast, mit dem Unterschied, dass du 10 zu dem d10 addierst, anstatt irgendetwas, was du normalerweise zu dem Check addieren würdest, mit der einzigen Ausnahme von LUCK. Ein Ziel, das Kugeln ausweichen kann, kann sich entscheiden, diesem Fernkampfangriff wie üblich auszuweichen.",
			"AmmoTypesAvailable": "Arrows, Bullets, and Rockets",
			"CostDescription": "500eb (Expensive)",
			"Cost": 500
		},
		{
			"Name_DE": "Rauch-Munition",
			"Name": "Smoke Ammunition",
			"Description": "Obscures a 10m/yd by 10m/yd area with smoke for a minute on impact. The typical penalty for trying to perform a task obscured by smoke is -4.",
			"Description_DE": "Verdunkelt beim Aufprall eine Fläche von 10m x 10m für eine Minute mit Rauch. Die typische Strafe für den Versuch, eine Aufgabe zu erfüllen, die durch Rauch verdeckt ist, ist -4.",
			"AmmoTypesAvailable": "Grenades only.",
			"CostDescription": "50eb (Costly)",
			"Cost": 50
		},
		{
			"Name_DE": "Tearga s-Munition",
			"Name": "Tearga s Ammunition",
			"Description": "When using this ammunition, you deal no damage with your attack. Anyone with meat eyes hit by your attack must instead attempt to beat a DV13 Resist Torture/Drugs Check. Anyone who fails suffers the Damaged Eye Critical injury (see pg. 188) for the next minute. You do not take the Bonus Damage from the Critical Injury.",
			"Description_DE": "Wenn du diese Munition benutzt, verursachst du mit deinem Angriff keinen Schaden. Jede Person mit Fleischaugen, die von deinem Angriff getroffen wird, muss stattdessen versuchen, einen DV13-Test auf Widerstand gegen Folter/Drogen zu bestehen. Jeder, der scheitert, erleidet für die nächste Minute die kritische Verletzung Beschädigtes Auge (siehe S. 188). Du nimmst den Bonusschaden der kritischen Verletzung nicht an.",
			"AmmoTypesAvailable": "Grenades only.",
			"CostDescription": "50eb (Costly)",
			"Cost": 50
		}
	]
}