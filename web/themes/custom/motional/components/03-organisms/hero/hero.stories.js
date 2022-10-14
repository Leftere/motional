import hero from './hero.twig'

import landingHeroData from './hero--landing.yml'
import grayHeroData from './hero--gray.yml'
import purpleHeroData from './hero--purple.yml'
import landingWhitePurpleData from './hero--white-purple.yml'
import newsHeroData from './hero--news.yml'
import bioHeroData from './hero--bio.yml'

/**
 * Storybook Definition.
 */
const meta = {
  title: 'Organisms/Hero',
}

export default meta

export const LandingHeroImage = () => hero(landingHeroData)
export const LandingHeroGray = () => hero(grayHeroData)
export const LandingHeroPurple = () => hero(purpleHeroData)
export const LandingWhitePurple = () => hero(landingWhitePurpleData)
export const NewsHero = () => hero(newsHeroData)
export const BioHero = () => hero(bioHeroData)
