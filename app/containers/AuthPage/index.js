/**
 *
 * AuthPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Loader, { LoaderOverlay } from 'components/Loader';
import H2 from 'components/H2';
import Form from 'components/Form';
import Input from 'components/TextInput';
import Button from 'components/Button';
import AlertMessage from 'components/AlertMessage';
import { unsetClient } from 'containers/Client/actions';
import currentUser from 'utils/userService';
import {
  makeSelectAuth,
  makeSelectAuthPending,
  makeSelectAuthError,
  makeSelectAuthClient,
} from './selectors';
import { sendAuth, sendSignUp } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  position: relative;
`;

const GroupStyled = styled.div`
  margin: 30px 0;
`;

export function AuthPage({
  sendPending,
  sendAuthError,
  onSubmitForm,
  onSubmitFormSignUp,
  logout,
  makeSelectClient,
}) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });
  const [state, updateState] = useState({ view: false });
  const changeView = () => {
    updateState({ view: !state.view });
  };

  return (
    <Wrapper>
      {sendPending && (
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      )}
      {sendAuthError && sendAuthError.statusText && !sendPending && (
        <AlertMessage color="danger">{sendAuthError.statusText}</AlertMessage>
      )}
      {!makeSelectClient && !state.view && (
        <GroupStyled>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <Input id="email" type="email" placeholder="mxstbr" label="Email" />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Button type="submit" value="Submit" color="primary">
              Submit
            </Button>
          </Form>
          <Button color="link" onClick={changeView}>
            Sign up
          </Button>
        </GroupStyled>
      )}
      {!makeSelectClient && state.view && (
        <GroupStyled>
          <H2>Sign up</H2>
          <Form onSubmit={onSubmitFormSignUp}>
            <Input id="username" type="text" label="User Name" />
            <Input id="newEmail" type="email" label="Email" />
            <Input
              id="newPassword"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Button type="submit" value="Submit" color="primary">
              Submit
            </Button>
          </Form>
          <Button color="link" onClick={changeView}>
            Sign in
          </Button>
        </GroupStyled>
      )}
      {makeSelectClient && (
        <GroupStyled>
          <H2>Hello {makeSelectClient}</H2>
          <Button color="primary" onClick={logout}>
            Logout
          </Button>
        </GroupStyled>
      )}
    </Wrapper>
  );
}

AuthPage.propTypes = {
  sendPending: PropTypes.bool,
  sendAuthError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onSubmitFormSignUp: PropTypes.func,
  logout: PropTypes.func,
  makeSelectClient: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  sendAuth: makeSelectAuth(),
  sendPending: makeSelectAuthPending(),
  sendAuthError: makeSelectAuthError(),
  makeSelectClient: makeSelectAuthClient(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ sendAuth }, dispatch),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const { email, password } = evt.target;
      const submitForm = {};
      if (email) {
        submitForm.email = email.value;
      }
      if (password) {
        submitForm.password = password.value;
      }
      dispatch(sendAuth(submitForm));
    },
    onSubmitFormSignUp: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const { newEmail, newPassword, username } = evt.target;
      const submitForm = {};
      if (username) {
        submitForm.username = username.value;
      }
      if (newEmail) {
        submitForm.email = newEmail.value;
      }
      if (newPassword) {
        submitForm.password = newPassword.value;
      }
      dispatch(sendSignUp(submitForm));
    },
    logout: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      currentUser.clearAppStorage();
      dispatch(unsetClient());
      // this.props.history.push('/sign-in');
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AuthPage);
