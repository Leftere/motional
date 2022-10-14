/* eslint-disable max-lines */

import textBlock from './text-block.twig'
import textBlockData from './text-block.yml'
import textBlockFullData from './text-block--full.yml'
import textBlockHalfData from './text-block--half.yml'
import textBlockThirdData from './text-block--third.yml'
import textBlockWithImageData from './text-block--with-image.yml'

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/TextBlock',
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
    small_title: {
      name: 'Small title',
      description: 'Small title text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    divider: {
      name: 'Accent Bar',
      description: 'Accent bar between titles and body',
      control: {
        type: 'boolean',
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
  },
}

export const TextBlock = ({
  large_title_element,
  large_title,
  small_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  divider,
}) =>
  textBlock({
    ...textBlockData,
    large_title_element: [large_title_element],
    large_title: large_title,
    small_title: small_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    divider: divider,
  })

TextBlock.args = {
  large_title_element: textBlockData.large_title_element[0],
  large_title: textBlockData.large_title,
  small_title: textBlockData.small_title,
  label: textBlockData.label,
  body: textBlockData.body,
  button_url: textBlockData.button_url,
  divider: textBlockData.divider,
  button_content: textBlockData.button_url
    ? textBlockData.button_content
    : 'Read more',
  button_modifiers: textBlockData.button_url
    ? textBlockData.button_modifiers[0]
    : 'primary',
}

export const TextBlockFull = ({
  large_title_element,
  large_title,
  small_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  divider,
}) =>
  textBlock({
    ...textBlockFullData,
    large_title_element: [large_title_element],
    large_title: large_title,
    small_title: small_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    divider: divider,
  })

TextBlockFull.args = {
  large_title_element: textBlockFullData.large_title_element[0],
  large_title: textBlockFullData.large_title,
  small_title: textBlockFullData.small_title,
  label: textBlockFullData.label,
  body: textBlockFullData.body,
  button_url: textBlockFullData.button_url,
  divider: textBlockFullData.divider,
  button_content: textBlockFullData.button_url
    ? textBlockFullData.button_content
    : 'Read more',
  button_modifiers: textBlockFullData.button_url
    ? textBlockFullData.button_modifiers[0]
    : 'primary',
}

export const TextBlockHalf = ({
  large_title_element,
  large_title,
  small_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  divider,
}) =>
  textBlock({
    ...textBlockHalfData,
    large_title_element: [large_title_element],
    large_title: large_title,
    small_title: small_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    divider: divider,
  })

TextBlockHalf.args = {
  large_title_element: textBlockHalfData.large_title_element[0],
  large_title: textBlockHalfData.large_title,
  small_title: textBlockHalfData.small_title,
  label: textBlockHalfData.label,
  body: textBlockHalfData.body,
  button_url: textBlockHalfData.button_url,
  divider: textBlockHalfData.divider,
  button_content: textBlockHalfData.button_url
    ? textBlockHalfData.button_content
    : 'Read more',
  button_modifiers: textBlockHalfData.button_url
    ? textBlockHalfData.button_modifiers[0]
    : 'primary',
}

export const TextBlockThird = ({
  large_title_element,
  large_title,
  small_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  divider,
}) =>
  textBlock({
    ...textBlockThirdData,
    large_title_element: [large_title_element],
    large_title: large_title,
    small_title: small_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    divider: divider,
  })

TextBlockThird.args = {
  large_title_element: textBlockThirdData.large_title_element[0],
  large_title: textBlockThirdData.large_title,
  small_title: textBlockThirdData.small_title,
  label: textBlockThirdData.label,
  body: textBlockThirdData.body,
  button_url: textBlockThirdData.button_url,
  divider: textBlockThirdData.divider,
  button_content: textBlockThirdData.button_url
    ? textBlockThirdData.button_content
    : 'Read more',
  button_modifiers: textBlockThirdData.button_url
    ? textBlockThirdData.button_modifiers[0]
    : 'primary',
}

export const TextBlockWithImage = ({
  large_title_element,
  large_title,
  small_title,
  label,
  body,
  button_url,
  button_content,
  button_modifiers,
  divider,
}) =>
  textBlock({
    ...textBlockWithImageData,
    large_title_element: [large_title_element],
    large_title: large_title,
    small_title: small_title,
    label: label,
    body: body,
    button_url: button_url,
    button_content: button_content,
    button_modifiers: [button_modifiers],
    divider: divider,
  })

TextBlockWithImage.args = {
  large_title_element: textBlockWithImageData.large_title_element[0],
  large_title: textBlockWithImageData.large_title,
  small_title: textBlockWithImageData.small_title,
  label: textBlockWithImageData.label,
  body: textBlockWithImageData.body,
  button_url: textBlockWithImageData.button_url,
  divider: textBlockWithImageData.divider,
  button_content: textBlockWithImageData.button_url
    ? textBlockWithImageData.button_content
    : 'Read more',
  button_modifiers: textBlockWithImageData.button_url
    ? textBlockWithImageData.button_modifiers[0]
    : 'primary',
}
