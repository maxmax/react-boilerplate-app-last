import React, { Children } from 'react';
import styled from 'styled-components';
import { Alert } from 'reactstrap';

const StyledAlert = styled(Alert)``;

function AlertMessage(props) {
  const alert = (
    <StyledAlert {...props}>{Children.toArray(props.children)}</StyledAlert>
  );
  return alert;
}

export { AlertMessage };
export default AlertMessage;
