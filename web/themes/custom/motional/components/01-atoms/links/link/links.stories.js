import link from './link.twig'

import linkData from './link.yml'

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' }

export const Links = () => link(linkData)
