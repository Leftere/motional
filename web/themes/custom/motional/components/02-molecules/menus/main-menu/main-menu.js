import Headroom from 'headroom.js'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

Drupal.behaviors.mainMenu = {
  mainMenuIsOpen() {
    return this.menu?.classList.contains('main-nav--open')
  },

  openMainMenu() {
    this.toggleExpand.classList.add('toggle-expand--open')
    this.toggleExpand.setAttribute('aria-expanded', 'true')
    this.menu.classList.add('main-nav--open')
    disableBodyScroll(this.menu)
  },

  closeMainMenu() {
    this.toggleExpand.classList.remove('toggle-expand--open')
    this.toggleExpand.setAttribute('aria-expanded', 'false')
    this.menu.classList.remove('main-nav--open')
    enableBodyScroll(this.mainMenu)
  },

  closeAllSubMenus() {
    const openMenus = document.querySelectorAll('.expand-sub--open')
    const openSubmenus = document.querySelectorAll('.main-menu--sub-open')
    const openWrappers = document.querySelectorAll('.main-menu__wrapper--open')

    openMenus.forEach((menu) => {
      menu?.classList.remove('expand-sub--open')
    })
    openSubmenus.forEach((menu) => {
      menu?.classList.remove('main-menu--sub-open')
    })

    openWrappers.forEach((wrapper) => {
      wrapper?.classList.remove('main-menu__wrapper--open')
      wrapper?.setAttribute('aria-hidden', 'true')
    })
  },

  attach(context) {
    this.toggleExpand = context.querySelector('.toggle-expand')
    this.menu = context.getElementById('main-nav')

    if (this.menu) {
      this.mainMenu = this.menu.querySelector('.main-menu')
      const expandMenu = this.menu.getElementsByTagName('button')

      // Initialize headroom
      this.headroom = new Headroom(this.menu, {
        onUnpin : () => {
          this.closeAllSubMenus()
        },
      })
      this.headroom.init()

      // Mobile menu show/hide
      this.toggleExpand.addEventListener('click', (e) => {
        e.preventDefault()
        if (this.mainMenuIsOpen()) {
          this.closeMainMenu()
          this.closeAllSubMenus()
        } else {
          this.openMainMenu()
        }
      })

      // Close menu on window resize
      window.addEventListener('resize', () => {
        if (this.mainMenuIsOpen()) {
          this.closeMainMenu()
          this.closeAllSubMenus()
        }
      })

      Array.from(expandMenu).forEach((button) => {
        // Sub menu show/hide
        button.addEventListener('click', (e) => {
          const menuItem = e.currentTarget
          const menuWrapper = menuItem.nextElementSibling
          const subMenu = menuWrapper?.querySelector('.main-menu--sub')

          if (menuItem?.classList.contains('expand-sub--open')) {
            this.closeAllSubMenus()
          } else {
            this.closeAllSubMenus()
            menuWrapper?.classList.add('main-menu__wrapper--open')
            menuWrapper?.setAttribute('aria-hidden', 'false')
            menuItem?.classList.add('expand-sub--open')
            subMenu?.classList.add('main-menu--sub-open')
          }
        })
      })

      // Close when clicking outside menu
      document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(this.menu)

        if (!withinBoundaries) {
          this.closeAllSubMenus()
        }
      })

      // Close on escape key
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          this.closeAllSubMenus()
        }
      })
    }
  },

  detach() {
    this.headroom.destroy()
    clearAllBodyScrollLocks()
  }
}
