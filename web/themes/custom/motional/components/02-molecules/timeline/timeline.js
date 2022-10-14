import Glide from '@glidejs/glide'

Drupal.behaviors.timelineCarousel = {
  attach(context) {
    this.timeline = context.querySelector('.timeline')
    this.timelineCarousel = this.timeline?.querySelector('.glide')
    this.slides = this.timelineCarousel?.querySelectorAll('.glide__slide')
    this.arrows = this.timelineCarousel?.querySelector('.glide__arrows')
    this.timelineHeader = this.timeline?.querySelector('.timeline__header')
    this.animationTime = 1000
    this.initHeaderHeight = this.timelineHeader?.offsetHeight
    this.glide

    // if slide exists and the slide length is greater than 1
    if (this.timelineCarousel && this.slides?.length > 1) {

      // show arrows
      this.arrows.style.display = 'block'

      // run glide to the timeline carousel
      this.mountCarousel()

      // on load, find header height and set arrows position
      if (window.innerWidth >= 1200) {
        this.arrows.style.top = '-' + this.initHeaderHeight / 2 + 'px'
      }

      // if header height changes, set arrows position again
      window.addEventListener(
        'resize',
        () => {
          if (window.innerWidth >= 1200) {
            if (this.timelineHeader.offsetHeight !== this.initHeaderHeight) {
              this.initHeaderHeight = this.timelineHeader.offsetHeight
            }
            this.arrows.style.top = '-' + this.initHeaderHeight / 2 + 'px'
          } else {
            if (this.arrows.style.top.length !== 0) {
              this.arrows.style.top = null
            }
          }
        },
        true,
      )
    } else {
      // add no controls class if there is only one slide
      this.timeline?.classList.add('carousel--no-controls')
    }
  },
  DisableControls(Glide, Components, Events) {
    const PREV_CONTROL_SELECTOR = '[data-glide-dir="|<"]'
    const NEXT_CONTROL_SELECTOR = '[data-glide-dir="|>"]'
    const component = {
      buildAfter() {
        this.prevBtn = Components.Html.root.querySelector(PREV_CONTROL_SELECTOR)
        this.nextBtn = Components.Html.root.querySelector(NEXT_CONTROL_SELECTOR)
      },
      handleDisable() {
        const perView = Glide.settings.perView
        const slidesCount = Components.Html.slides.length

        if (Glide.index >= slidesCount - perView) {
          this.nextBtn.classList.add('remove')
          this.prevBtn.classList.add('remove')
        } else {
          this.nextBtn.classList.remove('remove')
          this.prevBtn.classList.remove('remove')
        }
      },
    }
    Events.on('build.after', () => {
      component.buildAfter()
      component.handleDisable()
    })

    return component
  },
  mountCarousel() {
    // set content carousel options
    this.options = {
      animationDuration: this.animationTime,
      type: 'slider',
      rewind: false,
      perView: 5,
      perSwipe: '|',
      touchRatio: 1,
      bound: true,
      gap: 0,
      peek: {
        before: 0,
        after: 80,
      },
      breakpoints: {
        640: {
          dragThreshold: 80,
          swipeThreshold: 120,
          touchRatio: 1,
          perView: 1,
          gap: 20,
          peek: {
            before: 0,
            after: 0,
          },
        },
        768: {
          dragThreshold: 80,
          swipeThreshold: 120,
          touchRatio: 1,
          perView: 2,
          gap: 20,
          peek: {
            before: 0,
            after: 100,
          },
        },
        1024: {
          dragThreshold: 80,
          swipeThreshold: 120,
          touchRatio: 1,
          perView: 3,
          gap: 20,
          peek: {
            before: 0,
            after: 100,
          },
        },
        1200: {
          dragThreshold: 80,
          swipeThreshold: 120,
          touchRatio: 1,
          perView: 4,
          gap: 20,
          peek: {
            before: 0,
            after: 100,
          },
        },
      },
    }

    // set carousel glide
    this.glide = new Glide(this.timelineCarousel, this.options).mount({
      DisableControls: this.DisableControls,
    })
  },

  detach() {
    this.glide.destroy()
    this.glide.destroy()
  },
}
