/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CategoryPage from '../index';
import messages from '../messages';

describe('<CategoryPage />', () => {
  it('should render the Category Page text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <CategoryPage />
      </IntlProvider>,
    );
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull();
  });
});
