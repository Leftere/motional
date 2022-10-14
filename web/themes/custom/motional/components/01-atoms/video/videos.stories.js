import video from './video.twig'
import hostedVideo from './hosted-video.twig'

import videoData from './video.yml'
import videoFullData from './video-full.yml'
import hostedVideoData from './hosted-video.yml'

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Videos' }

export const Wide = () => video(videoData)

export const Full = () => video(videoFullData)

export const Hosted = () => hostedVideo(hostedVideoData)
