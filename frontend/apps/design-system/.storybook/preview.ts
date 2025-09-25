/* eslint-disable @nx/enforce-module-boundaries */
import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import docJson from '../../../../documentation.json'; // The path to your generated json file from Compodoc contains all your documentation information.

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Design Tokens', 'Elements', 'Blocks', 'Layouts', 'Pages']
      }
    },
    actions: { argTypesRegex: '^[A-Z].*Tap' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: '^_.*|registerOnChange$|registerOnTouched$|setDisabledState$|writeValue$',
    },
  },
};

export default preview;