/**
 * Trait Categories here are in order of display in sheet headers!
 */
export const TRAIT_CATEGORY = Object.freeze({
  /**
   * e.g. Common, Uncommon, Rare, Unique
   * (no rules, relevant in header)
   */
  RARITY: 'rarity',

  /**
   * e.g. General, Skill, [Class name], [Archetype name], [Ancestry name], Fiend
   * (no rules, relevant in header)
   */
  ORIGIN: 'origin',

  /**
   * e.g. [Tradition name], Devil, Demon
   * (no rules, relevant in header)
   */
  SUB_ORIGIN: 'sub-origin',

  /**
   * e.g. Composite, Oath, Apparition, Ikon, Modification, Dedication, Multiclass, Deviant, Evolution
   * (has rules, relevant in header)
   */
  BUILD_LIMITATION: 'build-limitation',

  /**
   * e.g. Impulse, Cantrip, Focus, Downtime, Consumable
   * (has rules)
   */
  TYPE_MECHANIC: 'type-mechanic',

  /**
   * e.g. Spellshape, Composition, Hex, Contingency, Tattoo, Fulu, Trap, Snare, Spellgun, Bomb, Contract, Missive
   * (has rules)
   */
  SUBTYPE_MECHANIC: 'subtype-mechanic',

  /**
   * Something mechanical you always want to know about, the most critical traits to pay attention to.
   * e.g. Incapacitation, Unstable, Flourish, Press, Curse, Overflow, Apex, Undead, Incorporeal
   * (has rules)
   */
  IMPORTANT_MECHANIC: 'important-mechanic',

  /**
   * Important but constantly appears in chat cards (on weapon attacks usually) so it should only be visibly
   * highlight-colored in sheet headers, not in chat cards, probably not inside sheets
   * e.g. Attack, Thrown, Brutal, Reach, Finesse
   * (has rules, relevant in header)
   */
  IMPORTANT_MECHANIC_OUTSIDE_CHAT: 'important-mechanic-outside-chat',

  /**
   * This trait has some rules that make it occasionally meaningful, you should glance at it if you're unfamiliar.
   * e.g. Visual, Auditory, Processed, Nonlethal, Jousting, Brace
   * (has rules)
   */
  OCCASIONAL_MECHANIC: 'occasional-mechanic',

  /**
   * This trait has no special rules of its own, but other traits or abilities often reference it so you should not miss
   * its existence.
   * e.g. Concentrate, Manipulate, Mental, Move, Poison, Disease
   * (no rules)
   */
  COMMON_TRIGGER: 'common-trigger',

  /**
   * This trait has rules but they are basically never important, it's probably fine if you forget about them
   * e.g. Esoterica, Light, Processed
   * (has rules)
   */
  MOSTLY_FLUFF: 'mostly-fluff',

  /**
   * This trait has no rules, is used for flavor, may be referenced by other things (e.g. weaknesses) but not commonly.
   * e.g. Fire, Water, Prediction, Detection, Healing, Gadget
   * (no rules)
   */
  VERY_FLUFF: 'very-fluff',

  /**
   * for user customization
   */
  USER_CUSTOM: 'user-custom',
})

const TC = TRAIT_CATEGORY

/**
 * approximately sorted by how diverse each group of traits is;  this way the visual preview starts off with lots of different stuff even beyond the samples
 */
export const CATEGORY_PER_TRAIT = {
  "pf2ett-sample-rarity": TC.RARITY,
  "pf2ett-sample-origin": TC.ORIGIN,
  "pf2ett-sample-sub-origin": TC.SUB_ORIGIN,
  "pf2ett-sample-build-limitation": TC.BUILD_LIMITATION,
  "pf2ett-sample-type-mechanic": TC.TYPE_MECHANIC,
  "pf2ett-sample-subtype-mechanic": TC.SUBTYPE_MECHANIC,
  "pf2ett-sample-important-mechanic": TC.IMPORTANT_MECHANIC,
  "pf2ett-sample-important-mechanic-outside-chat": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "pf2ett-sample-occasional-mechanic": TC.OCCASIONAL_MECHANIC,
  "pf2ett-sample-common-trigger": TC.COMMON_TRIGGER,
  "pf2ett-sample-mostly-fluff": TC.MOSTLY_FLUFF,
  "pf2ett-sample-very-fluff": TC.VERY_FLUFF,
  "pf2ett-sample-user-custom": TC.USER_CUSTOM,

  // Class-Specific Traits
  additive: TC.IMPORTANT_MECHANIC,
  "additive0": TC.IMPORTANT_MECHANIC,
  "additive1": TC.IMPORTANT_MECHANIC,
  "additive2": TC.IMPORTANT_MECHANIC,
  "additive3": TC.IMPORTANT_MECHANIC,
  amp: TC.SUBTYPE_MECHANIC,
  apparition: TC.BUILD_LIMITATION,
  brandish: TC.MOSTLY_FLUFF,
  bravado: TC.SUBTYPE_MECHANIC,
  coagulant: TC.IMPORTANT_MECHANIC,
  composite: TC.BUILD_LIMITATION,
  composition: TC.SUBTYPE_MECHANIC,
  cursebound: TC.SUBTYPE_MECHANIC,
  eidolon: TC.BUILD_LIMITATION,
  esoterica: TC.MOSTLY_FLUFF,
  evolution: TC.BUILD_LIMITATION,
  finisher: TC.SUBTYPE_MECHANIC,
  hex: TC.SUBTYPE_MECHANIC,
  ikon: TC.BUILD_LIMITATION,
  impulse: TC.TYPE_MECHANIC,
  infused: TC.OCCASIONAL_MECHANIC,
  infusion: TC.SUBTYPE_MECHANIC,
  litany: TC.SUBTYPE_MECHANIC,
  mindshift: TC.SUBTYPE_MECHANIC,
  modification: TC.BUILD_LIMITATION,
  oath: TC.BUILD_LIMITATION,
  overflow: TC.IMPORTANT_MECHANIC,
  psyche: TC.IMPORTANT_MECHANIC,
  rage: TC.IMPORTANT_MECHANIC,
  social: TC.OCCASIONAL_MECHANIC,
  spellshot: TC.ORIGIN,
  stance: TC.IMPORTANT_MECHANIC,
  tactic: TC.TYPE_MECHANIC,
  tandem: TC.TYPE_MECHANIC,
  transcendence: TC.IMPORTANT_MECHANIC,
  unstable: TC.IMPORTANT_MECHANIC,
  vigilante: TC.OCCASIONAL_MECHANIC,
  wandering: TC.BUILD_LIMITATION,

  // Affliction Traits
  curse: TC.IMPORTANT_MECHANIC, // hard to remove
  disease: TC.COMMON_TRIGGER,
  poison: TC.COMMON_TRIGGER,
  virulent: TC.IMPORTANT_MECHANIC, // hard to remove

  // Equipment Traits
  adjustment: TC.BUILD_LIMITATION,
  alchemical: TC.VERY_FLUFF,
  apex: TC.IMPORTANT_MECHANIC,
  artifact: TC.MOSTLY_FLUFF,
  barding: TC.SUBTYPE_MECHANIC,
  bomb: TC.SUBTYPE_MECHANIC,
  'bottled-breath': TC.SUBTYPE_MECHANIC,
  catalyst: TC.SUBTYPE_MECHANIC,
  censer: TC.SUBTYPE_MECHANIC,
  clockwork: TC.OCCASIONAL_MECHANIC,
  coda: TC.TYPE_MECHANIC,
  companion: TC.BUILD_LIMITATION,
  consumable: TC.TYPE_MECHANIC,
  contract: TC.SUBTYPE_MECHANIC,
  cursed: TC.IMPORTANT_MECHANIC,
  drug: TC.IMPORTANT_MECHANIC,
  elixir: TC.VERY_FLUFF,
  expandable: TC.SUBTYPE_MECHANIC,
  figurehead: TC.SUBTYPE_MECHANIC,
  focused: TC.SUBTYPE_MECHANIC,
  fulu: TC.SUBTYPE_MECHANIC,
  gadget: TC.VERY_FLUFF,
  graft: TC.SUBTYPE_MECHANIC,
  grimoire: TC.SUBTYPE_MECHANIC,
  intelligent: TC.VERY_FLUFF,
  invested: TC.IMPORTANT_MECHANIC,
  lozenge: TC.SUBTYPE_MECHANIC,
  mechanical: TC.VERY_FLUFF,
  missive: TC.SUBTYPE_MECHANIC,
  mutagen: TC.SUBTYPE_MECHANIC,
  oil: TC.VERY_FLUFF,
  potion: TC.VERY_FLUFF,
  precious: TC.MOSTLY_FLUFF,
  processed: TC.MOSTLY_FLUFF,
  relic: TC.BUILD_LIMITATION,
  saggorak: TC.TYPE_MECHANIC, // also weird
  scroll: TC.SUBTYPE_MECHANIC,
  snare: TC.SUBTYPE_MECHANIC,
  spellgun: TC.SUBTYPE_MECHANIC,
  spellheart: TC.SUBTYPE_MECHANIC,
  staff: TC.TYPE_MECHANIC,
  steam: TC.VERY_FLUFF,
  structure: TC.SUBTYPE_MECHANIC,
  talisman: TC.SUBTYPE_MECHANIC,
  tattoo: TC.SUBTYPE_MECHANIC,
  trap: TC.SUBTYPE_MECHANIC,
  wand: TC.SUBTYPE_MECHANIC,
  whetstone: TC.SUBTYPE_MECHANIC,

  // Armor Traits
  adjusted: TC.OCCASIONAL_MECHANIC,
  aquadynamic: TC.OCCASIONAL_MECHANIC,
  bulwark: TC.IMPORTANT_MECHANIC,
  comfort: TC.OCCASIONAL_MECHANIC,
  "entrench-melee": TC.OCCASIONAL_MECHANIC,
  "entrench-ranged": TC.OCCASIONAL_MECHANIC,
  flexible: TC.OCCASIONAL_MECHANIC,
  hindering: TC.IMPORTANT_MECHANIC,
  inscribed: TC.IMPORTANT_MECHANIC,
  laminar: TC.OCCASIONAL_MECHANIC,
  noisy: TC.OCCASIONAL_MECHANIC,
  ponderous: TC.IMPORTANT_MECHANIC,

  // Shield Traits
  "deflecting-bludgeoning": TC.IMPORTANT_MECHANIC,
  "deflecting-piercing": TC.IMPORTANT_MECHANIC,
  "deflecting-slashing": TC.IMPORTANT_MECHANIC,
  "deflecting-physical-ranged": TC.IMPORTANT_MECHANIC,
  foldaway: TC.OCCASIONAL_MECHANIC,
  harnessed: TC.IMPORTANT_MECHANIC,
  "hefty-2": TC.IMPORTANT_MECHANIC,
  "integrated-1d6-b": TC.OCCASIONAL_MECHANIC,
  "integrated-1d6-p": TC.OCCASIONAL_MECHANIC,
  "integrated-1d6-s": TC.OCCASIONAL_MECHANIC,
  "integrated-1d6-s-versatile-p": TC.OCCASIONAL_MECHANIC,
  "launching-dart": TC.OCCASIONAL_MECHANIC,
  'shield-throw-20': TC.OCCASIONAL_MECHANIC,
  'shield-throw-30': TC.OCCASIONAL_MECHANIC,

  // Weapon Traits
  agile: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  attached: TC.SUBTYPE_MECHANIC,
  "attached-to-shield": TC.SUBTYPE_MECHANIC,
  "attached-to-crossbow-or-firearm": TC.SUBTYPE_MECHANIC,
  backstabber: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  backswing: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  brace: TC.OCCASIONAL_MECHANIC,
  brutal: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "capacity-2": TC.OCCASIONAL_MECHANIC,
  "capacity-3": TC.OCCASIONAL_MECHANIC,
  "capacity-4": TC.OCCASIONAL_MECHANIC,
  "capacity-5": TC.OCCASIONAL_MECHANIC,
  climbing: TC.OCCASIONAL_MECHANIC,
  cobbled: TC.IMPORTANT_MECHANIC,
  combination: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  concealable: TC.OCCASIONAL_MECHANIC,
  concussive: TC.OCCASIONAL_MECHANIC,
  'critical-fusion': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "deadly-d4": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "deadly-d6": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "deadly-d8": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "deadly-d10": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "deadly-d12": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  disarm: TC.OCCASIONAL_MECHANIC,
  'double-barrel': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'fatal-aim-d10': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'fatal-aim-d12': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "fatal-d8": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "fatal-d10": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "fatal-d12": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  finesse: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  forceful: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'free-hand': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  grapple: TC.OCCASIONAL_MECHANIC,
  hampering: TC.OCCASIONAL_MECHANIC,
  injection: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  improvised: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "jousting-d4": TC.OCCASIONAL_MECHANIC,
  "jousting-d6": TC.OCCASIONAL_MECHANIC,
  "jousting-d8": TC.OCCASIONAL_MECHANIC,
  "jousting-d10": TC.OCCASIONAL_MECHANIC,
  kickback: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  modular: TC.OCCASIONAL_MECHANIC,
  mounted: TC.SUBTYPE_MECHANIC,
  nonlethal: TC.OCCASIONAL_MECHANIC,
  parry: TC.OCCASIONAL_MECHANIC,
  portable: TC.SUBTYPE_MECHANIC,
  propulsive: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'ranged-trip': TC.OCCASIONAL_MECHANIC,
  razing: TC.OCCASIONAL_MECHANIC,
  reach: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  recovery: TC.OCCASIONAL_MECHANIC,
  repeating: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  resonant: TC.OCCASIONAL_MECHANIC,
  "scatter-5": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "scatter-10": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "scatter-15": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "scatter-20": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  shoddy: TC.IMPORTANT_MECHANIC,
  shove: TC.OCCASIONAL_MECHANIC,
  sweep: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  tearing: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  tethered: TC.OCCASIONAL_MECHANIC,
  thrown: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-10": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-15": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-20": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-30": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-40": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-50": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-60": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-80": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-100": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "thrown-200": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  training: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  trip: TC.OCCASIONAL_MECHANIC,
  twin: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'two-hand-d6': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'two-hand-d8': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'two-hand-d10': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  'two-hand-d12': TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  unarmed: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  vehicular: TC.SUBTYPE_MECHANIC,
  venomous: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "versatile-acid": TC.OCCASIONAL_MECHANIC,
  "versatile-b": TC.OCCASIONAL_MECHANIC,
  "versatile-cold": TC.OCCASIONAL_MECHANIC,
  "versatile-electricity": TC.OCCASIONAL_MECHANIC,
  "versatile-fire": TC.OCCASIONAL_MECHANIC,
  "versatile-force": TC.OCCASIONAL_MECHANIC,
  "versatile-mental": TC.OCCASIONAL_MECHANIC,
  "versatile-p": TC.OCCASIONAL_MECHANIC,
  "versatile-poison": TC.OCCASIONAL_MECHANIC,
  "versatile-s": TC.OCCASIONAL_MECHANIC,
  "versatile-sonic": TC.OCCASIONAL_MECHANIC,
  "versatile-spirit": TC.OCCASIONAL_MECHANIC,
  "versatile-vitality": TC.OCCASIONAL_MECHANIC,
  "versatile-void": TC.OCCASIONAL_MECHANIC,
  "volley-20": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "volley-30": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "volley-50": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "volley-60": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,

  "range-increment-10": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-15": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-20": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-30": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-40": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-50": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-60": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-80": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-100": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-120": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-150": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-200": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-300": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  "range-increment-500": TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,

  // Feat Traits
  aftermath: TC.BUILD_LIMITATION,
  archetype: TC.ORIGIN,
  class: TC.ORIGIN,
  dedication: TC.BUILD_LIMITATION,
  deviant: TC.BUILD_LIMITATION,
  general: TC.ORIGIN,
  lineage: TC.BUILD_LIMITATION,
  multiclass: TC.BUILD_LIMITATION,
  reincarnated: TC.BUILD_LIMITATION,
  skill: TC.ORIGIN,

  // Mechanics Traits
  attack: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  aura: TC.OCCASIONAL_MECHANIC,
  cantrip: TC.TYPE_MECHANIC,
  concentrate: TC.COMMON_TRIGGER,
  consecration: TC.OCCASIONAL_MECHANIC,
  contingency: TC.SUBTYPE_MECHANIC,
  darkness: TC.OCCASIONAL_MECHANIC,
  death: TC.IMPORTANT_MECHANIC,
  detection: TC.VERY_FLUFF,
  downtime: TC.TYPE_MECHANIC,
  emotion: TC.VERY_FLUFF,
  exploration: TC.TYPE_MECHANIC,
  extradimensional: TC.MOSTLY_FLUFF,
  fear: TC.COMMON_TRIGGER,
  flourish: TC.IMPORTANT_MECHANIC,
  focus: TC.TYPE_MECHANIC,
  fortune: TC.OCCASIONAL_MECHANIC,
  healing: TC.VERY_FLUFF,
  holy: TC.MOSTLY_FLUFF,
  incapacitation: TC.IMPORTANT_MECHANIC,
  incarnate: TC.SUBTYPE_MECHANIC,
  light: TC.OCCASIONAL_MECHANIC,
  linguistic: TC.IMPORTANT_MECHANIC,
  magical: TC.COMMON_TRIGGER,
  manipulate: TC.COMMON_TRIGGER,
  mental: TC.COMMON_TRIGGER,
  minion: TC.IMPORTANT_MECHANIC,
  misfortune: TC.OCCASIONAL_MECHANIC,
  morph: TC.OCCASIONAL_MECHANIC,
  move: TC.COMMON_TRIGGER,
  polymorph: TC.OCCASIONAL_MECHANIC,
  possession: TC.SUBTYPE_MECHANIC,
  prediction: TC.VERY_FLUFF,
  press: TC.IMPORTANT_MECHANIC,
  radiation: TC.OCCASIONAL_MECHANIC,
  reckless: TC.IMPORTANT_MECHANIC,
  revelation: TC.VERY_FLUFF,
  sanctified: TC.MOSTLY_FLUFF,
  scrying: TC.VERY_FLUFF,
  secret: TC.OCCASIONAL_MECHANIC,
  sleep: TC.VERY_FLUFF,
  spellshape: TC.SUBTYPE_MECHANIC,
  splash: TC.IMPORTANT_MECHANIC_OUTSIDE_CHAT,
  subtle: TC.IMPORTANT_MECHANIC, // yes haha subtle is not subtle
  summon: TC.SUBTYPE_MECHANIC,
  summoned: TC.IMPORTANT_MECHANIC,
  tea: TC.SUBTYPE_MECHANIC,
  tech: TC.MOSTLY_FLUFF,
  technological: TC.VERY_FLUFF,
  teleportation: TC.MOSTLY_FLUFF,
  trial: TC.SUBTYPE_MECHANIC,
  unholy: TC.MOSTLY_FLUFF,

  // Sense Traits
  auditory: TC.OCCASIONAL_MECHANIC,
  olfactory: TC.OCCASIONAL_MECHANIC,
  visual: TC.OCCASIONAL_MECHANIC,
  illusion: TC.VERY_FLUFF,

  // Mythic Traits
  calling: TC.BUILD_LIMITATION,
  destiny: TC.BUILD_LIMITATION,
  mythic: TC.IMPORTANT_MECHANIC,

  // Tradition Traits
  arcane: TC.SUB_ORIGIN,
  divine: TC.SUB_ORIGIN,
  occult: TC.SUB_ORIGIN,
  primal: TC.SUB_ORIGIN,

  // Poison Traits
  contact: TC.MOSTLY_FLUFF,
  ingested: TC.MOSTLY_FLUFF,
  inhaled: TC.MOSTLY_FLUFF,
  injury: TC.MOSTLY_FLUFF,

  // Elemental Traits
  air: TC.VERY_FLUFF,
  earth: TC.VERY_FLUFF,
  fire: TC.VERY_FLUFF,
  metal: TC.VERY_FLUFF,
  water: TC.VERY_FLUFF,
  wood: TC.VERY_FLUFF,

  // Energy Traits
  acid: TC.VERY_FLUFF,
  cold: TC.VERY_FLUFF,
  electricity: TC.VERY_FLUFF,
  force: TC.VERY_FLUFF,
  sonic: TC.VERY_FLUFF,
  vitality: TC.MOSTLY_FLUFF,
  void: TC.MOSTLY_FLUFF,
  spirit: TC.MOSTLY_FLUFF, // spirit only affects creatures with souls.  note that this overlaps with spirit creatures :(
  shadow: TC.VERY_FLUFF,

  // Ancestry Traits
  aiuvarin: TC.ORIGIN,
  anadi: TC.ORIGIN,
  android: TC.ORIGIN,
  aphorite: TC.ORIGIN,
  ardande: TC.ORIGIN,
  athamaru: TC.ORIGIN,
  automaton: TC.ORIGIN,
  "awakened-animal": TC.ORIGIN, // awakened
  beastkin: TC.ORIGIN,
  centaur: TC.ORIGIN,
  changeling: TC.ORIGIN,
  conrasu: TC.ORIGIN,
  duergar: TC.ORIGIN,
  dragonblood: TC.ORIGIN,
  dromaar: TC.ORIGIN,
  dwarf: TC.ORIGIN,
  elf: TC.ORIGIN,
  fetchling: TC.ORIGIN,
  fleshwarp: TC.ORIGIN,
  ganzi: TC.ORIGIN,
  geniekin: TC.ORIGIN,
  ghoran: TC.ORIGIN,
  gnoll: TC.ORIGIN, // kholo
  gnome: TC.ORIGIN,
  goblin: TC.ORIGIN,
  goloma: TC.ORIGIN,
  grippli: TC.ORIGIN,
  halfling: TC.ORIGIN,
  human: TC.ORIGIN,
  hungerseed: TC.ORIGIN,
  jotunborn: TC.ORIGIN,
  kashrishi: TC.ORIGIN,
  kitsune: TC.ORIGIN,
  leshy: TC.ORIGIN,
  lizardfolk: TC.ORIGIN,
  locathah: TC.ORIGIN, // athamaru
  merfolk: TC.ORIGIN,
  minotaur: TC.ORIGIN,
  naari: TC.ORIGIN, // ifrit
  nagaji: TC.ORIGIN,
  nephilim: TC.ORIGIN,
  orc: TC.ORIGIN,
  oread: TC.ORIGIN,
  poppet: TC.ORIGIN,
  reflection: TC.ORIGIN,
  samsaran: TC.ORIGIN,
  sarangay: TC.ORIGIN,
  shisk: TC.ORIGIN,
  shoony: TC.ORIGIN,
  strix: TC.ORIGIN,
  suli: TC.ORIGIN,
  surki: TC.ORIGIN,
  sylph: TC.ORIGIN,
  talos: TC.ORIGIN,
  tanuki: TC.ORIGIN,
  undine: TC.ORIGIN,
  vanara: TC.ORIGIN,
  vishkanya: TC.ORIGIN,
  wayang: TC.ORIGIN,
  yaksha: TC.ORIGIN,
  yaoguai: TC.ORIGIN,

  // Class Traits
  alchemist: TC.ORIGIN,
  animist: TC.ORIGIN,
  barbarian: TC.ORIGIN,
  bard: TC.ORIGIN,
  champion: TC.ORIGIN,
  cleric: TC.ORIGIN,
  commander: TC.ORIGIN,
  druid: TC.ORIGIN,
  exemplar: TC.ORIGIN,
  fighter: TC.ORIGIN,
  guardian: TC.ORIGIN,
  gunslinger: TC.ORIGIN,
  inventor: TC.ORIGIN,
  investigator: TC.ORIGIN,
  kineticist: TC.ORIGIN,
  magus: TC.ORIGIN,
  monk: TC.ORIGIN, // also applied to a bunch of weapons.  oh well
  oracle: TC.ORIGIN,
  psychic: TC.ORIGIN,
  ranger: TC.ORIGIN,
  rogue: TC.ORIGIN,
  sorcerer: TC.ORIGIN,
  summoner: TC.ORIGIN,
  swashbuckler: TC.ORIGIN,
  thaumaturge: TC.ORIGIN,
  witch: TC.ORIGIN,
  wizard: TC.ORIGIN,

  // Creature Type Traits
  aberration: TC.ORIGIN,
  animal: TC.ORIGIN,
  astral: TC.ORIGIN,
  beast: TC.ORIGIN,
  celestial: TC.ORIGIN,
  construct: TC.ORIGIN,
  dragon: TC.ORIGIN,
  dream: TC.ORIGIN,
  elemental: TC.ORIGIN,
  ethereal: TC.ORIGIN,
  experiment: TC.ORIGIN,
  fey: TC.ORIGIN,
  fiend: TC.ORIGIN,
  fungus: TC.ORIGIN,
  giant: TC.ORIGIN,
  humanoid: TC.ORIGIN,
  monitor: TC.ORIGIN,
  ooze: TC.ORIGIN,
  petitioner: TC.ORIGIN,
  plant: TC.ORIGIN,
  "sea-devil": TC.ORIGIN,
  shade: TC.ORIGIN,
  //spirit: TC.ORIGIN, // ugh, it's also a damage type
  time: TC.ORIGIN,
  undead: TC.IMPORTANT_MECHANIC,

  // Monster Traits
  aeon: TC.SUB_ORIGIN,
  aesir: TC.SUB_ORIGIN,
  agathion: TC.SUB_ORIGIN,
  amphibious: TC.OCCASIONAL_MECHANIC,
  angel: TC.SUB_ORIGIN,
  anugobu: TC.SUB_ORIGIN,
  aquatic: TC.OCCASIONAL_MECHANIC,
  archon: TC.SUB_ORIGIN,
  asura: TC.SUB_ORIGIN,
  azarketi: TC.SUB_ORIGIN,
  azata: TC.SUB_ORIGIN,
  blight: TC.SUB_ORIGIN,
  boggard: TC.SUB_ORIGIN,
  bugbear: TC.SUB_ORIGIN,
  caligni: TC.SUB_ORIGIN,
  catfolk: TC.SUB_ORIGIN,
  'charau-ka': TC.SUB_ORIGIN,
  couatl: TC.SUB_ORIGIN,
  daemon: TC.SUB_ORIGIN,
  darvakka: TC.SUB_ORIGIN,
  demon: TC.SUB_ORIGIN,
  dero: TC.SUB_ORIGIN,
  dhampir: TC.SUB_ORIGIN,
  dinosaur: TC.SUB_ORIGIN,
  div: TC.SUB_ORIGIN,
  drow: TC.SUB_ORIGIN,
  duskwalker: TC.SUB_ORIGIN,
  formian: TC.SUB_ORIGIN,
  genie: TC.SUB_ORIGIN,
  ghost: TC.SUB_ORIGIN,
  ghoul: TC.SUB_ORIGIN,
  ghul: TC.SUB_ORIGIN,
  gigas: TC.SUB_ORIGIN,
  golem: TC.IMPORTANT_MECHANIC,
  graveknight: TC.SUB_ORIGIN,
  gremlin: TC.SUB_ORIGIN,
  grioth: TC.SUB_ORIGIN,
  hag: TC.SUB_ORIGIN,
  hantu: TC.SUB_ORIGIN,
  herald: TC.SUB_ORIGIN,
  hobgoblin: TC.SUB_ORIGIN,
  hryngar: TC.SUB_ORIGIN,
  ikeshti: TC.SUB_ORIGIN,
  incorporeal: TC.IMPORTANT_MECHANIC,
  inevitable: TC.SUB_ORIGIN,
  kaiju: TC.SUB_ORIGIN,
  kami: TC.SUB_ORIGIN,
  kobold: TC.SUB_ORIGIN,
  kovintus: TC.SUB_ORIGIN,
  lilu: TC.SUB_ORIGIN,
  mindless: TC.SUB_ORIGIN,
  morlock: TC.SUB_ORIGIN,
  mortic: TC.SUB_ORIGIN,
  mummy: TC.SUB_ORIGIN,
  munavri: TC.SUB_ORIGIN,
  mutant: TC.SUB_ORIGIN,
  nindoru: TC.SUB_ORIGIN,
  nymph: TC.SUB_ORIGIN,
  oni: TC.SUB_ORIGIN,
  paaridar: TC.SUB_ORIGIN,
  palinthanos: TC.SUB_ORIGIN,
  phantom: TC.SUB_ORIGIN,
  protean: TC.SUB_ORIGIN,
  psychopomp: TC.SUB_ORIGIN,
  qlippoth: TC.SUB_ORIGIN,
  rakshasa: TC.SUB_ORIGIN,
  ratfolk: TC.SUB_ORIGIN,
  sahkil: TC.SUB_ORIGIN,
  devil: TC.SUB_ORIGIN,
  sedacthy: TC.SUB_ORIGIN,
  serpentfolk: TC.SUB_ORIGIN,
  seugathi: TC.SUB_ORIGIN,
  shabti: TC.SUB_ORIGIN,
  siktempora: TC.SUB_ORIGIN,
  skeleton: TC.SUB_ORIGIN,
  skelm: TC.SUB_ORIGIN,
  skulk: TC.SUB_ORIGIN,
  soulbound: TC.SUB_ORIGIN,
  sporeborn: TC.SUB_ORIGIN,
  spriggan: TC.SUB_ORIGIN,
  sprite: TC.SUB_ORIGIN,
  stheno: TC.SUB_ORIGIN,
  swarm: TC.IMPORTANT_MECHANIC,
  tane: TC.SUB_ORIGIN,
  tanggal: TC.SUB_ORIGIN,
  tengu: TC.SUB_ORIGIN,
  titan: TC.SUB_ORIGIN,
  troll: TC.SUB_ORIGIN,
  urdefhan: TC.SUB_ORIGIN,
  vampire: TC.SUB_ORIGIN,
  velstrac: TC.SUB_ORIGIN,
  werecreature: TC.SUB_ORIGIN,
  wight: TC.SUB_ORIGIN,
  "wild-hunt": TC.SUB_ORIGIN,
  wraith: TC.SUB_ORIGIN,
  wraithvine: TC.SUB_ORIGIN,
  wyrwood: TC.SUB_ORIGIN,
  xulgath: TC.SUB_ORIGIN,
  zombie: TC.SUB_ORIGIN,

  shobhad: TC.SUB_ORIGIN,
  troop: TC.IMPORTANT_MECHANIC,

  // Rarity Traits (overriding their colors in sheet headers only!)
  // (and yeah these aren't actual traits in the pf2e system, but I want to show them in the preview)
  common: TC.RARITY,
  rare: TC.RARITY,
  uncommon: TC.RARITY,
  unique: TC.RARITY,

  // AP-Specific Traits
  'certain-kill': TC.IMPORTANT_MECHANIC,
  circus: TC.MOSTLY_FLUFF,
  'harrow-court': TC.MOSTLY_FLUFF,
  // Curtain Call personas
  "persona-flirt": TC.VERY_FLUFF,
  "persona-guardian": TC.VERY_FLUFF,
  "persona-leader": TC.VERY_FLUFF,
  "persona-scholar": TC.VERY_FLUFF,
  "persona-scoundrel": TC.VERY_FLUFF,
  "persona-underdog": TC.VERY_FLUFF,
  "persona-warrior": TC.VERY_FLUFF,
  "persona-wildcard": TC.VERY_FLUFF,

  // Hazard Traits
  environmental: TC.VERY_FLUFF,
  haunt: TC.COMMON_TRIGGER,

  // Kingdom Traits
  civic: TC.MOSTLY_FLUFF,
  commerce: TC.MOSTLY_FLUFF,
  kingdom: TC.TYPE_MECHANIC,
  leadership: TC.MOSTLY_FLUFF,
  region: TC.MOSTLY_FLUFF,
  upkeep: TC.MOSTLY_FLUFF,

  // Kingdom—Warfare Traits
  army: TC.VERY_FLUFF,
  cavalry: TC.VERY_FLUFF,
  infantry: TC.VERY_FLUFF,
  maneuver: TC.SUBTYPE_MECHANIC,
  morale: TC.SUBTYPE_MECHANIC,
  siege: TC.VERY_FLUFF,
  skirmisher: TC.VERY_FLUFF,

  // Variant Rules Traits
  'pervasive-magic': TC.SUB_ORIGIN,
  stamina: TC.SUB_ORIGIN,
  'true-name': TC.IMPORTANT_MECHANIC,

  // a bit of interoperability with the other modules
  "pf2e-ccc-patched": TC.MOSTLY_FLUFF,
  crew: TC.IMPORTANT_MECHANIC,
}

const UNUSED_TRAITS = {
  // pf2e-system specific, dunno why it adds it
  "handwraps-of-mighty-blows": TC.SUBTYPE_MECHANIC,

  // Alignment
  chaotic: TC.SUB_ORIGIN,
  evil: TC.SUB_ORIGIN,
  good: TC.SUB_ORIGIN,
  lawful: TC.SUB_ORIGIN,

  // Pre-remaster ancestries
  aasimar: TC.ORIGIN,
  awakened: TC.ORIGIN,
  ifrit: TC.ORIGIN,
  kholo: TC.ORIGIN,
  tiefling: TC.ORIGIN,
  tripkee: TC.ORIGIN,

  // Pre-remaster monster groups
  coatl: TC.ORIGIN,
  ratajin: TC.ORIGIN,
  sea: TC.ORIGIN,
  shapechanger: TC.ORIGIN,


  // only on AoN
  "universal ancestry": TC.MOSTLY_FLUFF,
  banner: TC.MOSTLY_FLUFF,
  legacy: TC.MOSTLY_FLUFF,
  charm: TC.MOSTLY_FLUFF,
  skirmish: TC.SUBTYPE_MECHANIC,
  vocal: TC.MOSTLY_FLUFF,

  // weirdly missing from the pf2e system, maybe not used as traits
  complex: TC.TYPE_MECHANIC,
  telepathy: TC.VERY_FLUFF,

  // kingmaker stuff
  weather: TC.VERY_FLUFF,
  camping: TC.MOSTLY_FLUFF,
  meal: TC.MOSTLY_FLUFF,

  // Kingdom—Event Traits
  beneficial: TC.MOSTLY_FLUFF,
  continuous: TC.MOSTLY_FLUFF,
  dangerous: TC.MOSTLY_FLUFF,
  'hex-km': TC.MOSTLY_FLUFF,
  settlement: TC.MOSTLY_FLUFF,

  // Kingdom—Settlement Traits
  building: TC.SUBTYPE_MECHANIC,
  edifice: TC.IMPORTANT_MECHANIC,
  famous: TC.IMPORTANT_MECHANIC,
  infamous: TC.IMPORTANT_MECHANIC,
  infrastructure: TC.IMPORTANT_MECHANIC,
  residential: TC.IMPORTANT_MECHANIC,
  yard: TC.SUBTYPE_MECHANIC,

  // Pre-remaster mechanics
  open: TC.IMPORTANT_MECHANIC,

  // Planar Traits
  erratic: TC.OCCASIONAL_MECHANIC,
  finite: TC.OCCASIONAL_MECHANIC,
  flowing: TC.OCCASIONAL_MECHANIC,
  high: TC.OCCASIONAL_MECHANIC,
  immeasurable: TC.OCCASIONAL_MECHANIC,
  low: TC.OCCASIONAL_MECHANIC,
  metamorphic: TC.OCCASIONAL_MECHANIC,
  microgravity: TC.OCCASIONAL_MECHANIC,
  sentient: TC.OCCASIONAL_MECHANIC,
  shadow: TC.OCCASIONAL_MECHANIC,
  static: TC.OCCASIONAL_MECHANIC,
  strange: TC.OCCASIONAL_MECHANIC,
  subjective: TC.OCCASIONAL_MECHANIC,
  gravity: TC.OCCASIONAL_MECHANIC,
  timeless: TC.OCCASIONAL_MECHANIC,
  unbounded: TC.OCCASIONAL_MECHANIC,

  // School Traits
  abjuration: TC.VERY_FLUFF,
  conjuration: TC.VERY_FLUFF,
  divination: TC.VERY_FLUFF,
  enchantment: TC.VERY_FLUFF,
  evocation: TC.VERY_FLUFF,
  necromancy: TC.VERY_FLUFF,
  transmutation: TC.VERY_FLUFF,

  // Settlement Traits
  city: TC.VERY_FLUFF,
  metropolis: TC.VERY_FLUFF,
  town: TC.VERY_FLUFF,
  village: TC.VERY_FLUFF,
}