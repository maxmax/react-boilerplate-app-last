import React from 'react';
import styled from 'styled-components';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

const StyledInput = styled(Input)``;

function TextInput(props) {
  const input = (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <StyledInput {...props} />
      {props.formText && <FormText color="muted">{props.formText}</FormText>}
    </FormGroup>
  );
  return input;
}

export { TextInput };
export default TextInput;
