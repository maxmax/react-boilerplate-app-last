/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import PostPage from '../index';
import messages from '../messages';

describe('<PostPage />', () => {
  it('should render the Post Page text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <PostPage />
      </IntlProvider>,
    );
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull();
  });
});
