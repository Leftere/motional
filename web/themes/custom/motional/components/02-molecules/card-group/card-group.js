import Glide from '@glidejs/glide'

Drupal.behaviors.cardGroup = {
  attach(context) {
    this.cardGroup = context.querySelector('.card-group')
    this.cardGroupCarousel = this.cardGroup?.querySelector('.glide')
    this.cardGroupCards = this.cardGroup?.querySelectorAll('.card--resource')
    this.slides = this.cardGroupCarousel?.querySelectorAll('.glide__slide')
    this.animationTime = 700
    this.cardGroupCarouselGlide
    this.breakpoint = 640
    this.glideInit = false

    if (this.slides?.length > 1) {
      // set content carousel options
      this.options = {
        animationDuration: this.animationTime,
        type: 'slider',
        rewind: false,
        perView: 1,
        gap: 10,
        peek: {
          before: 0,
          after: 50,
        },
      }

      // set carousel image glide
      this.cardGroupCarouselGlide = new Glide(
        this.cardGroupCarousel,
        this.options,
      )

      if(window.innerWidth < this.breakpoint) {
        this.cardGroupCarouselGlide.mount()
        this.glideInit = true
      }

      //On glide resize glide state
      window.addEventListener( 'resize', () => {
        if(window.innerWidth < this.breakpoint) {
          if (this.glideInit === false) {
            this.cardGroupCarouselGlide = new Glide(this.cardGroupCarousel, this.options)
            this.cardGroupCarouselGlide.mount()
            this.glideInit = true
          }
        } else {
          if (this.glideInit === true) {
            this.cardGroupCarouselGlide.destroy()
            this.glideInit = false
          }
        }
      })
    }
  },
  detach() {
    this.cardGroupCarouselGlide.destroy()
  },
}
