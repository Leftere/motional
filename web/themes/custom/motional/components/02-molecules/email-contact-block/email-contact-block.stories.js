import emailContactBlock from './email-contact-block.twig'
import emailContactBlockDATA from './email-contact-block.yml'

export default {
  title: 'Molecules/Email Contact Block',
}

export const EmailContactBlock = () => emailContactBlock(emailContactBlockDATA)
