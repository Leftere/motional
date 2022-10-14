import numberedList from './numbered-list.twig'
import test from './numbered-list-test.yml'

/**
 * Storybook Definition.
 */
const meta = {
  title: 'Organisms/NumberedList',
}

export default meta
export const Test = () => numberedList(test)
