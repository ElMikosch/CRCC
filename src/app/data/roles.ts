import { Role } from "../models/role";

export function getAllRoles(): Role[] {
  return [
    {
      name: "Rockerboy",
      description: "Rock-and-roll rebels who use performance, art, and rhetoric to fight authority.",
      roleAbility: "Charismatic Impact",
      roleInfoFile: "assets/Rockerboy.pdf"
    },
    {
      name: "Solo",
      description: "Assassins, bodyguards, killers, and soldiers-for-hire in a lawless new world.",
      roleAbility: "Combat Awareness",
      roleInfoFile: "assets/Solo.pdf"
    },
    {
      name: "Netrunner",
      description: "Cybernetic master hackers of the post-NET world and brain-burning secret stealers.",
      roleAbility: "Interface",
      roleInfoFile: "assets/Netrunner.pdf"
    },
    {
      name: "Tech",
      description: "Renegade mechanics and supertech inventors; the people who make the Dark Future run.",
      roleAbility: "Maker",
      roleInfoFile: "assets/Tech.pdf"
    },
    {
      name: "Medtech",
      description: "Unsanctioned street doctors and cyberware medics, patching up meat and metal alike.",
      roleAbility: "Medicine",
      roleInfoFile: "assets/Medtech.pdf"
    },
    {
      name: "Media",
      description: "Reporters, media stars, and social influencers risking it all for the truth—or glory.",
      roleAbility: "Credibility",
      roleInfoFile: "assets/Media.pdf"
    },
    {
      name: "Exec",
      description: "Corporate power brokers and business raiders fighting to restore the rule of the Megacorps.",
      roleAbility: "Teamwork",
      roleInfoFile: "assets/Exec.pdf"
    },
    {
      name: "Lawman",
      description: "Maximum law enforcers patrolling the mean streets and barbarian warrior highways beyond.",
      roleAbility: "Backup",
      roleInfoFile: "assets/Lawman.pdf"
    },
    {
      name: "Fixer",
      description: "Dealmakers, organizers, and information brokers in the post-War Midnight Markets of The Street.",
      roleAbility: "Operator",
      roleInfoFile: "assets/Fixer.pdf"
    },
    {
      name: "Nomad",
      description: "Transport experts, ultimate road warriors, pirates, and smugglers who keep the world connected.",
      roleAbility: "Moto",
      roleInfoFile: "assets/Nomad.pdf"
    }
  ]
}
