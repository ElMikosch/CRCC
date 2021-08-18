import { Role } from "../models/role";

export function getAllRoles(): Role[] {
  return [
    {
      name: "Rockerboy",
      description: "Rock-and-roll rebels who use performance, art, and rhetoric to fight authority.",
      roleAbility: "Charismatic Impact"
    },
    {
      name: "Solo",
      description: "Assassins, bodyguards, killers, and soldiers-for-hire in a lawless new world.",
      roleAbility: "Combat Awareness"
    },
    {
      name: "Netrunner",
      description: "Cybernetic master hackers of the post-NET world and brain-burning secret stealers.",
      roleAbility: "Interface"
    },
    {
      name: "Tech",
      description: "Renegade mechanics and supertech inventors; the people who make the Dark Future run.",
      roleAbility: "Maker"
    },
    {
      name: "Medtech",
      description: "Unsanctioned street doctors and cyberware medics, patching up meat and metal alike.",
      roleAbility: "Medicine"
    },
    {
      name: "Media",
      description: "Reporters, media stars, and social influencers risking it all for the truth—or glory.",
      roleAbility: "Credibility"
    },
    {
      name: "Exec",
      description: "Corporate power brokers and business raiders fighting to restore the rule of the Megacorps.",
      roleAbility: "Teamwork"
    },
    {
      name: "Lawman",
      description: "Maximum law enforcers patrolling the mean streets and barbarian warrior highways beyond.",
      roleAbility: "Backup"
    },
    {
      name: "Fixer",
      description: "Dealmakers, organizers, and information brokers in the post-War Midnight Markets of The Street.",
      roleAbility: "Operator"
    },
    {
      name: "Nomad",
      description: "Transport experts, ultimate road warriors, pirates, and smugglers who keep the world connected.",
      roleAbility: "Moto"
    }
  ]
}
