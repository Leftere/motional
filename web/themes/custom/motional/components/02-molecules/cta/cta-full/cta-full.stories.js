import ctaFull from '../cta-full/cta-full.twig'
import ctaFullData from '../cta-full/cta-full.yml'
import ctaFullWithImageData from '../cta-full/cta-full--with-image.yml'

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/CTA',
  argTypes: {
    cta_full_container_modifiers: {
      name: 'Modifier',
      description: 'Choose between two container alignment modifiers (left and right).',
      options: ['left', 'right'],
      type: {
        required: true
      },
      table: {
        type: 'select',
        label: {
          left: 'left',
          right: 'right',
        },
      },
      control: {
        type: 'select',
        label: {
          left: 'left',
          right: 'right',
        },
      }
    },
    cta_full_modifiers: {
      name: 'Modifier',
      description: 'Choose between two modifiers (purple and black) to control the variation of the component',
      type: {
        required: true
      },
      options: ['purple', 'black'],
      table: {
        type: 'select',
        label: {
          purple: 'purple',
          black: 'black',
        },
      },
      control: {
        type: 'select',
        label: {
          purple: 'purple',
          black: 'black',
        },
      }
    },
    background_image_src: {
      name: 'Background image',
      description: 'Optional background image',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    background_image_alt: {
      name: 'Background image alt',
      description: 'Optional background image alt',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'Label',
      description: 'Optional label for full cta',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'Title',
      description: 'Title for full cta',
      type: {
        required: true
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    subtitle: {
      name: 'Subtitle',
      description: 'Subtitle for full cta',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    description: {
      name: 'Description',
      description: 'Optional description for full cta',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    button_content: {
      name: 'Button text',
      description: 'Text for button',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    button_url: {
      name: 'Button url',
      description: 'URL for button',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    image_src: {
      name: 'Image source',
      description: 'Image source for full cta',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    image_alt: {
      name: 'Image alt',
      description: 'Image alt for full cta',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    }
  },
}

export const CTAFull = ({
  cta_full_container_modifiers,
  cta_full_modifiers,
  subtitle,
  background_image_src,
  background_image_alt,
  label,
  title,
  description,
  button_content,
  button_url,
  image_src,
  image_alt
}) =>
  ctaFull({
    ...ctaFullData,
    cta_full_container_modifiers: [cta_full_container_modifiers],
    cta_full_modifiers: [cta_full_modifiers],
    background_image_src: background_image_src,
    background_image_alt: background_image_alt,
    label: label,
    title: title,
    subtitle: subtitle,
    description: description,
    button_content: button_content,
    button_url: button_url,
    image_src: image_src,
    image_alt: image_alt
  })

CTAFull.args = {
  cta_full_container_modifiers: ctaFullData.cta_full_container_modifiers,
  cta_full_modifiers: ctaFullData.cta_full_modifiers[0],
  background_image_src: ctaFullData.background_image_src,
  background_image_alt: ctaFullData.background_image_alt,
  label: ctaFullData.label,
  title: ctaFullData.title,
  description: ctaFullData.description,
  button_content: ctaFullData.button_content,
  button_url: ctaFullData.button_url,
  image_src: ctaFullData.image_src,
  image_alt: ctaFullData.image_alt,
}

CTAFull.argTypes = {
  cta_full_container_modifiers: {
    table: {
      disable: true
    },
    control: {
      disable: true
    }
  },
  background_image_src: {
    table: {
      disable: true
    },
    control: {
      disable: true
    }
  },
  background_image_alt: {
    table: {
      disable: true
    },
    control: {
      disable: true
    }   
  },
  subtitle: {
    table: {
      disable: true
    },
    control: {
      disable: true
    }
  }
}

export const CTAFullWithImage = ({
  cta_full_container_modifiers,
  cta_full_modifiers,
  background_image_src,
  background_image_alt,
  label,
  title,
  subtitle,
  description,
  button_content,
  button_url,
  image_src,
  image_alt
}) =>
  ctaFull({
    ...ctaFullWithImageData,
    cta_full_container_modifiers: [cta_full_container_modifiers],
    cta_full_modifiers: cta_full_modifiers,
    background_image_src: background_image_src,
    background_image_alt: background_image_alt,
    label: label,
    title: title,
    subtitle: subtitle,
    description: description,
    button_content: button_content,
    button_url: button_url,
    image_src: image_src,
    image_alt: image_alt
  })

CTAFullWithImage.args = {
  cta_full_container_modifiers: ctaFullWithImageData.cta_full_container_modifiers[0],
  background_image_src: ctaFullWithImageData.background_image_src,
  background_image_alt: ctaFullWithImageData.background_image_alt,
  label: ctaFullWithImageData.label,
  title: ctaFullWithImageData.title,
  subtitle: ctaFullWithImageData.subtitle,
  description: ctaFullWithImageData.description,
  button_content: ctaFullWithImageData.button_content,
  button_url: ctaFullWithImageData.button_url,
  image_src: ctaFullWithImageData.image_src,
  image_alt: ctaFullWithImageData.image_alt,
}

CTAFullWithImage.argTypes = {
  cta_full_modifiers: {
    table: {
      disable: true
    },
    control: {
      disable: true
    }
  }
}