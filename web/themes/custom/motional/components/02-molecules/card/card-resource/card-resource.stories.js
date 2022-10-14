import cardResource from './card-resource.twig'
import cardResourceData from './card-resource.yml'

export default {
  title: 'Molecules/Card',
  argTypes: {
    link: {
      name: 'Link',
      description: 'Link that is applied to the title and image',
      type: { 
        required: true 
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    title: {
      name: 'Title',
      description: 'Title for the card',
      type: { 
        required: true 
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    description: {
      name: 'Description',
      description: 'Description for the card',
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    image_src: {
      name: 'Image source',
      description: 'Image source for the card',
      type: { 
        required: true 
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    image_alt: {
      name: 'Image alt',
      description: 'Image alt for the card',
      type: { 
        required: true 
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    label: {
      name: 'Label',
      description: 'Label for the card',
      type: { 
        name: 'text', 
        required: false
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    date: {
      name: 'Date',
      description: 'Date for the card',
      type: { 
        required: true
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    series_title: {
      name: 'Series title',
      description: 'Optional Series title for card.',
      type: { 
        name: 'text', 
        required: false
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    },
    series_title_url: {
      name: 'Series title url',
      description: 'Optional Series title url for card.',
      type: { 
        name: 'text', 
        required: false
      },
      table: {
        type: 'text'
      },
      control: {
        type: 'text'
      }
    }
  }
}

export const CardResource = ({
  link,
  title,
  description,
  image_src,
  image_alt,
  label,
  date,
  series_title,
  series_title_url
}) =>
  cardResource({
    ...cardResourceData,
    link: link,
    title: title,
    description: description,
    image_src: image_src,
    image_alt: image_alt,
    label: label,
    date: date,
    series_title: series_title,
    series_title_url: series_title_url
  })

CardResource.args = {
  link: cardResourceData.link,
  title: cardResourceData.title,
  description: cardResourceData.description,
  image_src: cardResourceData.image_src,
  image_alt: cardResourceData.image_alt,
  label: cardResourceData.label,
  date: cardResourceData.date,
  series_title: cardResourceData.series_title,
  series_title_url: cardResourceData.series_title_url
}
