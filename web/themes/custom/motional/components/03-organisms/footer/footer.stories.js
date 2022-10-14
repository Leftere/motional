import footer from './footer.twig'
import footerData from './footer.yml'

export default {
  title: 'Organisms/Footer',
}

export const Footer = () => footer(footerData)
