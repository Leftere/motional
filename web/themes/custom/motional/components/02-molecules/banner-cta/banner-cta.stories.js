import bannerCTA from './banner-cta.twig'
import bannerCTAData from './banner-cta.yml'

export default {
  title: 'Molecules/Banner CTA',
  argTypes: {
    variation: {
      name: 'Background Color',
      description: 'Background color variation for Banner CTA',
      defaultValue: 'turquoise',
      control: {
        type: 'select',
        options: ['turquoise', 'dark_blue'],
      },
    }
  }
}

export const BannerCTA = ({
  variation,
}) =>
  bannerCTA({
    ...bannerCTAData,
    banner_cta_modifiers: variation !== '' && [variation],
  })
