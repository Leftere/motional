Drupal.behaviors.featuredVideoTextBlock = {
  attach(context) {
    const buttons = context.querySelectorAll('.toggleVideo')

    buttons.forEach((button) => {
      button.addEventListener('click', function (e) {
        e.preventDefault()

        const video = context.querySelector(
          '.featured-video-text-block-video_embed_wrapper',
        )
        const iframe = context
          .querySelector(
            '.featured-video-text-block iframe.media-oembed-content',
          )
          .contentDocument.querySelector('iframe')

        if (video?.classList.contains('active')) {
          video?.classList.remove('active')

          if (iframe.src.includes('autoplay')) {
            const src = iframe.src
            iframe.src = src.replace('&autoplay=1', '')
          }
        } else {
          video?.classList.add('active')
          if (!iframe.src.includes('autoplay')) {
            iframe.src += '&autoplay=1'
          }
        }
      })
    })
  },
}
