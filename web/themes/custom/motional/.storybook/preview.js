import { addDecorator, addParameters } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import prettier from 'prettier/standalone';
import prettierHTML from 'prettier/parser-html'

// GLOBAL CSS
import '../components/style.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

addParameters({
  docs: {
    transformSource: input =>
      prettier.format(input, {
        parser: 'html',
        plugins: [prettierHTML],
      }),
  },
});

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
