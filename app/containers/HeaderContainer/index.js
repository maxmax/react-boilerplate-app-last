/**
 *
 * HeaderContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Header from 'components/Header';
import { unsetClient } from 'containers/Client/actions';
import currentUser from 'utils/userService';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectHeaderContainer, makeSelectAuthClient } from './selectors';
import reducer from './reducer';
import saga from './saga';

const Wrapper = styled.div`
  position: relative;
`;

export function HeaderContainer({ makeSelectClient, logout }) {
  useInjectReducer({ key: 'headerContainer', reducer });
  useInjectSaga({ key: 'headerContainer', saga });

  return (
    <Wrapper>
      <Header authorized={makeSelectClient && true} logout={logout} />
    </Wrapper>
  );
}

HeaderContainer.propTypes = {
  makeSelectClient: PropTypes.string,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  headerContainer: makeSelectHeaderContainer(),
  makeSelectClient: makeSelectAuthClient(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(HeaderContainer);
