import breadcrumb from './breadcrumbs/breadcrumbs.twig'
import mainMenu from './main-menu/main-menu.twig'

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml'
import mainMenuData from './main-menu/main-menu.yml'

import './main-menu/main-menu'

// Give body min height to demonstrate headroom
document.body.style['min-height'] = '300vh'

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' }

export const Breadcrumbs = () => breadcrumb(breadcrumbsData)

export const Main = () => mainMenu(mainMenuData)
