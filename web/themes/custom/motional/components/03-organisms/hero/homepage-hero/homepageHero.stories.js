import homepageHero from './homepage-hero.twig'

import homepageHeroVideoData from './hero--homepage-video.yml'
import homepageHeroImageData from './hero--homepage-image.yml'
import './homepage-hero'

/**
 * Storybook Definition.
 */
const meta = {
  title: 'Organisms/Hero/Homepage Hero',
}

export default meta

export const HomepageHeroVideo = () => homepageHero(homepageHeroVideoData)
export const HomepageHeroImage = () => homepageHero(homepageHeroImageData)
