/**
 *
 * AppCard.js
 *
 * Renders an App/Info Card, enforcing the usage of the name, description, url tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Colors } from 'utils/style';

const AppCardStyled = styled.div`
  font-size: 0.8em;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 30px auto;
`;

const AppCardStyledTitle = styled.div`
  color: ${Colors.brand};
  font-size: 1.2em;
`;

function AppCard(props) {
  return (
    <AppCardStyled>
      <AppCardStyledTitle>{props.name}</AppCardStyledTitle>
      <div>{props.description}</div>
      <div>{props.url}</div>
    </AppCardStyled>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
AppCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default AppCard;
