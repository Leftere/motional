import sectionIntro from './section-intro.twig'
import sectionIntroData from './section-intro.yml'

export default {
  title: 'Molecules/Section Intro',
  argTypes: {
    label: {
      name: 'Label',
      description: 'Section label',
      defaultValue: sectionIntroData.section_intro_label,
      type: {
        name: 'string',
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'Title',
      description: 'Section title',
      defaultValue: sectionIntroData.section_intro_title,
      type: {
        name: 'string',
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    text: {
      name: 'Text',
      description: 'Section text',
      defaultValue: sectionIntroData.section_intro_text,
      type: {
        name: 'string',
      },
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    variation: {
      name: 'Button variation',
      description: 'Toggle different button variations',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['', 'primary', 'secondary'],
      },
    },
    text_align: {
      name: 'Text alignment',
      description: 'Align text',
      defaultValue: 'left',
      control: {
        type: 'radio',
        options: ['left', 'center'],
      },
    },
    
  },
}

export const SectionIntro = ({ title, label, text, text_align, variation }) =>
  sectionIntro({
    ...sectionIntroData,
    section_intro_label: label,
    section_intro_title: title,
    section_intro_text: text,
    text_align: text_align,
    button_modifiers: variation !== '' && [variation],
  })
