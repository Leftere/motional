import cardGroup from './card-group.twig'
import cardGroupData from './card-group.yml'
import './card-group'

export default {
  title: 'Molecules/CardGroup',
  argTypes: {
    title: {
      name: 'Title',
      description: 'Title for the section',
      type: {
        required: true,
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    description: {
      name: 'Description',
      description: 'Description for the section',
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
    articles: {
      name: 'Articles',
      description: 'Articles for related news (max of 2)',
      table: {
        type: 'object',
      },
      control: {
        type: 'object',
      },
    }
  },
}

export const CardGroup = ({
  title,
  description,
  button_content,
  button_url,
  articles
}) =>
  cardGroup({
    ...cardGroupData,
    title: title,
    description: description,
    button_content: button_content,
    button_url: button_url,
    articles
  })

CardGroup.args = {
  title: cardGroupData.title,
  description: cardGroupData.description,
  button_content: cardGroupData.button_content,
  button_url: cardGroupData.button_url,
  articles: cardGroupData.articles
}
