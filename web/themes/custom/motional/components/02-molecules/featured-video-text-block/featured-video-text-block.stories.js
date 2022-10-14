import featuredVideoTextBlock from './featured-video-text-block.twig'
import featuredVideoTextBlockData from './featured-video-text-block.yml'

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/FeaturedVideoTextBlock',
  argTypes: {
    large_title_element: {
      name: 'Large title element',
      description: 'Choose between h2 or and h3.',
      options: ['h2', 'h3'],
      table: {
        type: 'select',
        label: {
          h2: 'h2',
          h3: 'h3',
        },
      },
      control: {
        type: 'select',
        label: {
          h2: 'h2',
          h3: 'h3',
        },
      },
    },
    large_title: {
      name: 'Large title',
      description: 'Large title text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'Label',
      description: 'Label text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    body: {
      name: 'Body',
      description: 'Body text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    button_url: {
      name: 'Button url',
      description: 'Button url',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    button_content: {
      name: 'Button text',
      description: 'Button text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    button_modifiers: {
      name: 'Button modifiers',
      description: 'Choose between primary or secondary modifiers',
      options: ['primary', 'secondary'],
      table: {
        type: 'select',
        label: {
          primary: 'primary',
          secondary: 'secondary',
        },
      },
      control: {
        type: 'select',
        label: {
          primary: 'primary',
          secondary: 'secondary',
        },
      },
    },
    image_position: {
      name: 'Image Position',
      description: 'Choose between left or right modifiers',
      options: ['left', 'right'],
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
      },
    },
  },
}

export const TextBlock = ({
  large_title_element,
  large_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  image_position,
}) =>
  featuredVideoTextBlock({
    ...featuredVideoTextBlockData,
    large_title_element: [large_title_element],
    large_title: large_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    image_position: image_position,
  })

TextBlock.args = {
  large_title_element: featuredVideoTextBlockData.large_title_element[0],
  large_title: featuredVideoTextBlockData.large_title,
  label: featuredVideoTextBlockData.label,
  body: featuredVideoTextBlockData.body,
  button_url: featuredVideoTextBlockData.button_url,
  button_content: featuredVideoTextBlockData.button_url
    ? featuredVideoTextBlockData.button_content
    : 'Read more',
  button_modifiers: featuredVideoTextBlockData.button_url
    ? featuredVideoTextBlockData.button_modifiers[0]
    : 'primary',
}

export const WithVideoOpen = ({
  large_title_element,
  large_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  image_position,
}) =>
  featuredVideoTextBlock({
    ...featuredVideoTextBlockData,
    large_title_element: [large_title_element],
    large_title: large_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    image_position: image_position,
    video_status: 'active',
  })

WithVideoOpen.args = {
  large_title_element: featuredVideoTextBlockData.large_title_element[0],
  large_title: featuredVideoTextBlockData.large_title,
  label: featuredVideoTextBlockData.label,
  body: featuredVideoTextBlockData.body,
  button_url: featuredVideoTextBlockData.button_url,
  button_content: featuredVideoTextBlockData.button_url
    ? featuredVideoTextBlockData.button_content
    : 'Read more',
  button_modifiers: featuredVideoTextBlockData.button_url
    ? featuredVideoTextBlockData.button_modifiers[0]
    : 'primary',
}
