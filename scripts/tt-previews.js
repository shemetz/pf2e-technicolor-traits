import { descriptionKeyOfTrait, nameKeyOfTrait } from './utils.js'
import { CATEGORY_PER_TRAIT, TRAIT_CATEGORY } from './trait-data.js'

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api

export class TechnicolorTraitsPreviews extends HandlebarsApplicationMixin(ApplicationV2) {

  static DEFAULT_OPTIONS = {
    id: 'pf2ett-previews',
    classes: ['sheet', 'pf2ett-previews'],
    tag: 'form',
    position: {
      width: 1280,
      height: 1000,
    },
    window: {
      resizable: true,
      title: 'pf2e-technicolor-traits.Previews.Title',
      contentClasses: ['standard-form', 'pf2ett-previews-container'],
    },
    form: {
      handler: TechnicolorTraitsPreviews.formHandler,
      submitOnChange: false,
      closeOnSubmit: false,
    },
  }

  static PARTS = {
    'previews-main': {
      template: 'modules/pf2e-technicolor-traits/templates/previews.hbs',
    },
    footer: {
      template: 'templates/generic/form-footer.hbs',
    },
  }

  _configureRenderOptions (options) {
    super._configureRenderOptions(options)
    options.parts = []
    options.parts.push('footer')
    options.parts.push('previews-main')
  }

  /**
   * Process form submission for the sheet
   * @this {TechnicolorTraitsPreviews}            The handler is called with the application as its bound scope
   * @param {SubmitEvent} event                   The originating form submission event
   * @param {HTMLFormElement} form                The form element that was submitted
   * @param {FormDataExtended} formData           Processed data for the submitted form
   * @returns {Promise<void>}
   */
  static async formHandler (event, form, formData) {

  }

  /**
   * Construct an object of data to be passed to this froms HTML template.
   *
   * @param {string} partId - The part being rendered
   * @param {ApplicationRenderContext} context - The shared context provided by _prepareContext
   * @returns {Promise<ApplicationRenderContext>} Context data for the form part
   * @protected
   */
  async _preparePartContext (partId, context) {
    context.partId = `${this.id}-${partId}`
    context.sampleTraits = Object.values(TRAIT_CATEGORY)
      .map((trait) => ({
        dashedName: `pf2ett-sample-${trait}`,
        nameKey: `pf2e-technicolor-traits.TraitCategory.${trait}.Name`,
        tooltipKey: `pf2e-technicolor-traits.TraitCategory.${trait}.Tooltip`,
      }))
    context.allTheTraits = Object.keys(CATEGORY_PER_TRAIT)
      .filter(trait => !trait.startsWith('pf2ett-sample-'))
      .map((trait) => ({
        dashedName: trait,
        nameKey: nameKeyOfTrait(trait),
        tooltipKey: descriptionKeyOfTrait(trait),
      }))
      // filter out traits that no longer exist, e.g. Good, Gnoll
      .filter(tr => tr.nameKey !== undefined && tr.nameKey.length > 0)
    context.mode = game.settings.get('pf2e-technicolor-traits', 'mode')
    return context
  }

  /**
   * Set dynamic window height after rendering using the ApplicationV2 lifecycle hook.
   * @param {object} context - The rendering context.
   * @param {object} options - Render options.
   */
  _onRender (context, options) {
  //I tried to add a dropdown selector for the mode in here, but immediately gave up
  }
}