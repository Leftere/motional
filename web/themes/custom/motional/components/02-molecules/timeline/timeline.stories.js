import timeline from './timeline.twig'
import timelineData from './timeline.yml'
import './timeline'

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Timeline' }

export const Timeline = () => timeline(timelineData)
