import officeContact from './office-contact.twig'
import officeContactData from './office-contact.yml'

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/OfficeContact',
  argTypes: {
    location: {
      name: 'Location',
      description: 'Location text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
    address: {
      name: 'Address',
      description: 'Address text',
      table: {
        type: 'text',
      },
      control: {
        type: 'text',
      },
    },
  }
}

export const OfficeContact = ({
  location,
  address,
}) =>
  officeContact({
    ...officeContactData,
    location: location,
    address: address
  })

OfficeContact.args = {
  location: officeContactData.location,
  address: officeContactData.address
}
