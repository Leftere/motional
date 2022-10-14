import partnersLogos from './partners-logos.twig'
import partnersLogosDATA from './partners-logos.yml'
export default {
  title: 'Molecules/Partners Logos',
}

export const JSPartnersLogos = () => partnersLogos(partnersLogosDATA)
