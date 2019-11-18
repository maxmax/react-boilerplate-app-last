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
import { Button } from 'reactstrap';
import Loader, { LoaderOverlay } from 'components/Loader';
import AlertMessage from 'components/AlertMessage';

const AppCardStyled = styled.div`
  font-size: 0.8em;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 30px auto;
  position: relative;
  min-height: 140px;
`;

const AppCardStyledTitle = styled.div`
  color: ${Colors.brand};
  font-size: 1.2em;
`;

function AppCard(props) {
  if (props.pending) {
    return (
      <AppCardStyled>
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      </AppCardStyled>
    );
  }

  if (props.error && props.error.statusText && !props.pending) {
    return <AlertMessage color="danger">{props.error.statusText}</AlertMessage>;
  }

  if (props.name) {
    return (
      <AppCardStyled>
        <AppCardStyledTitle>{props.name}</AppCardStyledTitle>
        <div>{props.description}</div>
        <div>{props.url}</div>
        <br />
        <Button color="primary" onClick={props.update}>
          Update
        </Button>
      </AppCardStyled>
    );
  }

  return null;
}

// We require the use of src and alt, only enforced by react in dev mode
AppCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  pending: PropTypes.bool,
  error: PropTypes.object,
  update: PropTypes.func,
};

export default AppCard;
