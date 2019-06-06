import React from 'react';
import { render } from 'react-testing-library';

import Form from '../index';

describe('<Form />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<Form id={id} />);
    expect(container.querySelector('form').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Form>{children}</Form>);
    const { childNodes } = container.querySelector('form');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
