import dl from './dl.twig'
import ul from './ul.twig'
import ol from './ol.twig'

import dlData from './dl.yml'
import ulData from './ul.yml'
import olData from './ol.yml'

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' }

export const DefinitionList = () => dl(dlData)

export const UnorderedList = () => ul(ulData)

export const OrderedList = () => ol(olData)
