import contactSharing from './contact-sharing.twig'
import contactSharingDATA from './contact-sharing.yml'

export default {
  title: 'Molecules/Contact Sharing',
}

export const ContactSharing = () => contactSharing(contactSharingDATA)
