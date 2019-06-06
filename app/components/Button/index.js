/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';
import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function ButtonWrapper(props) {
  // Render an anchor tag
  let button = (
    <Wrapper>
      <A href={props.href} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </A>
    </Wrapper>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  // Type
  if (props.type) {
    button = (
      <StyledButton type="submit" value="Submit">
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  // Type/Color
  if (props.type && props.color) {
    button = (
      <Button type="submit" value="Submit" color={props.color}>
        {Children.toArray(props.children)}
      </Button>
    );
  }

  if (props.onClick && props.color) {
    button = (
      <Button onClick={props.onClick} color={props.color}>
        {Children.toArray(props.children)}
      </Button>
    );
  }

  return button;
}

ButtonWrapper.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ButtonWrapper;
