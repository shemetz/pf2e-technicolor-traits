/** just for syntax highlighting! */
export const css = String.raw

/** just for syntax highlighting! */
export const html = String.raw

/** "ranged-trip" to probably "Ranged trip" */
export let ALL_TRAITS_IN_CONFIG = {}
Hooks.once('init', () => {
  ALL_TRAITS_IN_CONFIG = {
    ...CONFIG.PF2E.ancestryTraits,
    ...CONFIG.PF2E.elementTraits,
    ...CONFIG.PF2E.energyDamageTypes,
    ...CONFIG.PF2E.magicTraditions,
    ...CONFIG.PF2E.sanctificationTraits,
    ...CONFIG.PF2E.creatureTraits,
    ...CONFIG.PF2E.classTraits,
    ...CONFIG.PF2E.damageTraits,
    ...CONFIG.PF2E.spellTraits,
    ...CONFIG.PF2E.weaponTraits,
    ...CONFIG.PF2E.otherArmorTags,
    ...CONFIG.PF2E.otherWeaponTags,
    ...CONFIG.PF2E.rangeTraits,
    ...CONFIG.PF2E.featTraits,
    ...CONFIG.PF2E.consumableTraits,
    ...CONFIG.PF2E.actionTraits,
    ...CONFIG.PF2E.hazardTraits,
    ...CONFIG.PF2E.vehicleTraits,
    ...CONFIG.PF2E.equipmentTraits,
    ...CONFIG.PF2E.shieldTraits,
    ...CONFIG.PF2E.armorTraits,
    ...CONFIG.PF2E.kingmakerTraits,
  }
})

export const nameKeyOfTrait = (trait) => ALL_TRAITS_IN_CONFIG[trait]
export const descriptionKeyOfTrait = (trait) => CONFIG.PF2E.traitsDescriptions[trait]
