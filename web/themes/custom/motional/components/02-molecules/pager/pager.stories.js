import pager from './pager.twig'

import pagerData from './pager.yml'
import pagerEllipsesData from './pager-ellipses.yml'
import pagerPrevEllipsesData from './pager-prev-ellipses.yml'
import pagerBothEllipsesData from './pager-both-ellipses.yml'

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Pager' }

export const Basic = () => pager(pagerData)

export const WithNext = () => pager({
  ...pagerData,
  ...pagerEllipsesData
})

export const WithBoth = () => pager({
  ...pagerData,
  ...pagerBothEllipsesData
})

export const WithPrevious = () =>
  pager({
    ...pagerData,
    ...pagerPrevEllipsesData
  })
