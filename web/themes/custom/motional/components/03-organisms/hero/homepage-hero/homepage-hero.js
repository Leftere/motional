Drupal.behaviors.homepageHero = {
  attach(context) {
    this.hero = context.querySelector('.hero--home')
    this.video = this.hero.querySelector('video')
    this.playButton = this.hero?.querySelector('.video__play')
    this.pauseButton = this.hero?.querySelector('.video__pause')

    if (this.video) {
      this.video.muted = true
      this.video.loop = true
      this.video.playsinline = true
      this.video.play()

      this.video.addEventListener('play', () => {
        if (this.hero) {
          this.hero.classList.add('is-playing')
        }
      })

      this.video.addEventListener('pause', () => {
        if (this.hero) {
          this.hero.classList.remove('is-playing')
        }
      })
    }

    if (this.playButton) {
      this.playButton.addEventListener('click', () => {
        if (this.video) {
          this.video.play()
        }
      })
    }

    if (this.pauseButton) {
      this.pauseButton.addEventListener('click', () => {
        if (this.video) {
          this.video.pause()
        }
      })
    }
  }
}
