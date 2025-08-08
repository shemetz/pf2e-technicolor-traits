import { CATEGORY_PER_TRAIT, TRAIT_CATEGORY } from './trait-data.js'
import { TechnicolorTraitsPreviews } from './tt-previews.js'
import { ALL_TRAITS_IN_CONFIG, css, descriptionKeyOfTrait, nameKeyOfTrait } from './utils.js'

const MODULE_ID = 'pf2e-technicolor-traits'

let styleElement = null

const initializeStyleElement = () => {
  if (styleElement !== null) return
  styleElement = document.createElement('style')
  styleElement.id = `${MODULE_ID}-css`
  document.querySelector('head').appendChild(styleElement)
}

/**
 * you may be wondering:  why so many selectors???
 *
 * well it's because the traits are hard to identify so I need 3 different methods.
 *
 * In chat cards for feats, need to target this:
 *
 *     <span class="tag" data-trait="" data-tooltip="PF2E.TraitDescriptionFire">Fire</span>
 */
export const refreshStyleElement = () => {
  const toggledOn = game.settings.get(MODULE_ID, 'mode') !== "disabled"
  if (!toggledOn) {
    styleElement.innerHTML = ''
    return
  }
  const customColoredTraits = game.settings.get(MODULE_ID, 'custom-colored-traits')

  let newCss = ''
  {
    newCss += css`*:not(.subsection.languages) > .tags {`
    for (const category of Object.values(TRAIT_CATEGORY)) {
      const traitSelectors = Object.entries(CATEGORY_PER_TRAIT).
        filter(([, cat]) => cat === category).
        map(([trait]) => trait).
        map((trait) => `tag#${trait}, .tag[data-slug="${trait}"], .tag[data-tooltip="${descriptionKeyOfTrait(trait)}"]`).
        //map((trait) => descriptionKeyOfTrait(trait) && `.tag[data-tooltip="${descriptionKeyOfTrait(trait)}"]`).
        filter((str) => str !== undefined)
      newCss = newCss + css`
          ${traitSelectors.join(',\n')} {
              background: var(--background-pf2ett-${category});
              border: var(--border-pf2ett-${category});
              order: var(--order-pf2ett-${category});

              > div::before {
                  box-shadow: 0 0 0 var(--tag-inset-shadow-size) var(--background-pf2ett-${category}) inset;
              }
          }`
    }
    const customTraitSelectors = (customColoredTraits + ',your custom').split(',').map(trait => trait.trim()).
      map((trait) => `tag#${trait}, .tag[data-slug="${trait}"]`).filter(trait => trait.length > 0)
    newCss = newCss + css`
        ${customTraitSelectors.join(',\n')} {
            background: var(--background-pf2ett-user-custom);
            border: var(--border-pf2ett-user-custom);
            order: var(--order-pf2ett-user-custom);

            > div::before {
                box-shadow: 0 0 0 var(--tag-inset-shadow-size) var(--background-pf2ett-user-custom) inset;
            }
        }`
    newCss += `}`
  }

  newCss += css`
      tags .tag.rarity.common,
      tags .tag.rarity.uncommon,
      tags .tag.rarity.rare,
      tags .tag.rarity.unique {
          background-color: var(--background-pf2ett-rarity);
      }
  `

  styleElement.innerHTML = newCss
}

const registerSettings = () => {
  game.settings.register(MODULE_ID, 'mode', {
    name: `color-coding mode`,
    scope: 'client',
    config: false,
    type: String,
    default: true,
    onChange: refreshStyleElement,
  })
  game.settings.registerMenu(MODULE_ID, 'previews', {
    name: `Configure color-coded traits`,
    label: `Preview all traits`,
    scope: 'client',
    icon: 'fas fa-wrench',
    type: TechnicolorTraitsPreviews,
    restricted: false,
  })
  game.settings.register(MODULE_ID, 'custom-colored-traits', {
    name: `Custom list of traits to uniquely colorize`,
    hint: `Separated by commas.  They will be rainbow-colored, to be distinct.`,
    scope: 'client',
    config: true,
    type: String,
    default: '',
  })
}

Hooks.once('init', () => {
  initializeStyleElement()
  registerSettings()
  console.log(`${MODULE_ID}: Initialized`)
})

const DEBUG_MODE = false

Hooks.once('ready', () => {
  refreshStyleElement()

  if (DEBUG_MODE) {
    for (const trait in CATEGORY_PER_TRAIT) {
      if (nameKeyOfTrait(trait) === undefined) {
        console.warn(
          `pf2ett |    ${trait}    outdated.`)
      }
    }
    console.warn('-------')
    for (const trait in ALL_TRAITS_IN_CONFIG) {
      if (CATEGORY_PER_TRAIT[trait] === undefined) {
        console.warn(
          `pf2ett |    ${trait}    missing.`)
      }
    }
  }
})
