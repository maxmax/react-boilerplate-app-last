import React from 'react';
import { render } from 'react-testing-library';

import AppCard from '../index';

const name = 'Site Name';
const description = 'Site Description';
const renderComponent = (props = {}) =>
  render(<AppCard name={name} description={description} {...props} />);

describe('<Img />', () => {
  it('should render an AppCard', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element).not.toBeNull();
  });

  it('should have an src attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element.hasAttribute('name')).toBe(true);
  });

  it('should have an alt attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element.hasAttribute('description')).toBe(true);
  });
});
