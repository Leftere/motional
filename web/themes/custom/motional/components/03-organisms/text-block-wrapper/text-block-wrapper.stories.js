import textBlockWrapper from './text-block-wrapper.twig'
import full from './text-block-wrapper-full.yml'
import half from './text-block-wrapper-half.yml'
import third from './text-block-wrapper-third.yml'

/**
 * Storybook Definition.
 */
const meta = {
  title: 'Organisms/TextBlockWrapper',
}

export default meta
export const Full = () => textBlockWrapper(full)
export const Half = () => textBlockWrapper(half)
export const Third = () => textBlockWrapper(third)
