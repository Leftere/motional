import carouselImage from './carousel-image/carousel-image.twig'
import carouselImageData from './carousel-image/carousel-image.yml'

import carouselTestimonial from './carousel-testimonial/carousel-testimonial.twig'
import carouselTestimonialData from './carousel-testimonial/carousel-testimonial.yml'
import './carousel'

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Carousel' }

export const CarouselImage = () => carouselImage(carouselImageData)
export const CarouselTestimonial = () => carouselTestimonial(carouselTestimonialData)
