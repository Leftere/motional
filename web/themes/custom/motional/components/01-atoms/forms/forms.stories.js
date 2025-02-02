import checkbox from './checkbox/checkbox.twig'
import radio from './radio/radio.twig'
import select from './select/select.twig'
import textfields from './textfields/textfields.twig'

import checkboxData from './checkbox/checkbox.yml'
import radioData from './radio/radio.yml'
import selectOptionsData from './select/select.yml'

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' }

export const Checkboxes = () => checkbox(checkboxData)

export const RadioButtons = () => radio(radioData)

export const SelectDropdowns = () => select(selectOptionsData)

export const TextfieldsExamples = () => textfields()
