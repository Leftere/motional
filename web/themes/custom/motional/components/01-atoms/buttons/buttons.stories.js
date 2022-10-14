// Buttons Stories
import button from './button.twig'
import buttonBaseData from './button.yml'
import buttonPrimaryData from './button--primary.yml'
import buttonSecondaryData from './button--secondary.yml'

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Buttons',
  argTypes: {
    variation: {
      name: 'Button variation',
      description: 'Toggle different button variations',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['', 'primary', 'secondary'],
      },
    },
    button_content: {
      name: 'Button content',
      description: 'Text for the button',
      defaultValue: buttonBaseData.button_content,
      type: {
        name: 'string',
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    }
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
    docs: { source: { format: true } }
  },
}

export const BaseButton = ({
  variation,
  button_content,
}) =>
  button({
    ...buttonBaseData,
    button_content: button_content,
    button_modifiers: variation !== '' && [variation],
  })

export const PrimaryButton = () => button(buttonPrimaryData)
export const SecondaryButton = () => button(buttonSecondaryData)
