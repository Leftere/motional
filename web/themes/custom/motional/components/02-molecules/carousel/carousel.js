import Glide from '@glidejs/glide'

Drupal.behaviors.carousel = {
  attach(context) {
    this.carousels = context.querySelectorAll('.carousel')

    this.carousels.forEach((carousel) => {
      const carouselTestimonial = carousel?.classList.contains('carousel--testimonial')
      const carouselImage = carousel?.classList.contains('carousel--image')
      const contentSlider = carousel?.querySelector('.glide--content')
      const imageSlider = carousel?.querySelector('.glide--images')
      const slides = contentSlider?.querySelectorAll('.glide__slide')
      const arrows = context.querySelectorAll('.glide__arrows')
      const bullets = context.querySelectorAll('.glide__bullets')
      const animationTime = 700
      let carouselGlideContent
      let carouselGlideImage

      // if slide exists and the slide length is greater than 1
      if (carousel && slides?.length > 1) {

        // show arrows
        arrows.forEach((arrow) => {
          arrow.style.display = 'block'
        })

        // show bullets
        bullets.forEach((bullet) => {
          bullet.style.display = 'block'
        })

        // if carousel type is testimonial,
        // mount testimonial carousel
        if (carouselTestimonial) {
          const contentOptions = {
            dragThreshold: false,
            swipeThreshold: false,
            animationDuration: animationTime,
            type: 'carousel',
            perView: 1,
            gap: 0,
            breakpoints: {
              768: {
                dragThreshold: 80,
                swipeThreshold: 120,
                touchRatio: 0,
                perView: 1,
                gap: 0,
              },
            },
          }
      
          // set image carousel options
          const imageOptions = {
            touchRatio: 0,
            dragThreshold: 80,
            swipeThreshold: 120,
            animationDuration: animationTime,
            type: 'carousel',
            perView: 1,
            breakpoints: {
              768: {
                focusAt: 0,
                perView: 1,
                gap: 0,
              },
            },
          }
      
          // set carousel content glide
          carouselGlideContent = new Glide(
            contentSlider,
            contentOptions,
          ).mount()
      
          // set carousel image glide
          carouselGlideImage = new Glide(imageSlider, imageOptions).mount()
        }

        // if carousel type is image,
        // mount image carousel
        if (carouselImage) {
          const contentOptions = {
            dragThreshold: false,
            swipeThreshold: false,
            animationDuration: animationTime,
            type: 'carousel',
            perView: 1,
            gap: 0,
            breakpoints: {
              768: {
                dragThreshold: 80,
                swipeThreshold: 120,
                touchRatio: 0,
                perView: 1,
                gap: 0,
              },
            },
          }
      
          // set image carousel options
          const imageOptions = {
            touchRatio: 0,
            dragThreshold: 80,
            swipeThreshold: 120,
            animationDuration: animationTime,
            type: 'carousel',
            perView: 1,
            gap: 25,
            peek: {
              before: 0,
              after: 133,
            },
            breakpoints: {
              768: {
                perView: 1,
                gap: 0,
                peek: {
                  before: 0,
                  after: 0,
                },
              },
            },
          }
      
          // set carousel content glide
          carouselGlideContent = new Glide(
            contentSlider,
            contentOptions,
          ).mount()
      
          // set carousel image glide
          carouselGlideImage = new Glide(imageSlider, imageOptions).mount()
        }

        // run events that connects carousel
        carouselGlideContent.on('run', (e) => {
          carouselGlideImage.go(e.direction)
        })

        carouselGlideImage.on('run', (e) => {
          carouselGlideContent.go(e.direction)
        })

      } else {
        // add no controls class if there is only one slide
        carousel?.classList.add('carousel--no-controls')
      }
    })
  }
}
