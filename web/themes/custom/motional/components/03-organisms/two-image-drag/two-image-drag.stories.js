import twoImageDrag from './two-image-drag.twig'
import twoImageDragData from './two-image-drag.yml'
import './two-image-drag'

/**
 * Storybook Definition.
 */
const meta = {
  title: 'Organisms/Two Image Drag',
}

export default meta
export const TwoImageDrag = () => twoImageDrag(twoImageDragData)
