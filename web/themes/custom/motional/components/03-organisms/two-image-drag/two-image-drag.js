import ImageCompare from 'image-compare-viewer'

Drupal.behaviors.twoImageDrag = {
  attach(context) {
    const el = context.querySelector('.two-image-drag__inner')

    const options = {
      controlColor: '#000000',
      controlShadow: false,
      addCircle: true,
      addCircleBlur: false,
      smoothing: false,
      startingPoint: 70,
    }

    if (el) {
      this.viewer = new ImageCompare(el, options).mount()
    }
  }
}
