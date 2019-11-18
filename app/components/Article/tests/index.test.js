import React from 'react';
import { render } from 'react-testing-library';

import PostCard from '../index';

const name = 'Site Name';
const description = 'Site Description';
const renderComponent = (props = {}) =>
  render(<PostCard name={name} description={description} {...props} />);

describe('<Img />', () => {
  it('should render an PostCard', () => {
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
