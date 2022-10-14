Drupal.behaviors.share = {
  attach(context) {
    const facebook = context.querySelector('.share-facebook')
    const twitter = context.querySelector('.share-twitter')
    const copyLink = context.querySelector('.share-link')
    const tooltip = document.querySelector('.tooltip')

    facebook.addEventListener('click', (e) => {
      e.preventDefault()
      const url =
        'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href
      openShareWindow(url)
    })

    twitter.addEventListener('click', (e) => {
      e.preventDefault()
      const url = 'https://twitter.com/share?url=' + window.location.href
      openShareWindow(url)
    })

    copyLink.addEventListener('click', (e) => {
      e.preventDefault()
      const copyUrl = window.location.href;
      tooltip.textContent = 'Copied!'
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(copyUrl)
      } else {
        let textArea = document.createElement('textarea')
        textArea.value = copyUrl
        textArea.style.position = 'fixed'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        return new Promise((res, rej) => {
          document.execCommand('copy') ? res() : rej()
          textArea.remove()
        })
      }
    })

    function openShareWindow(url) {
      const params = 'width=600,height=500'
      window.open(url, 'popup', params)
    }
  },
}
