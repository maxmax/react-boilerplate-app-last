/**
 *
 * FakeCool
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import AlertMessage from 'components/AlertMessage';
import Loader, { LoaderOverlay } from 'components/Loader';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectFakeCool,
  makeSelectFakeCoolError,
  makeSelectFakeCoolPending,
} from './selectors';
import { getFakeCool } from './actions';
import reducer from './reducer';
import saga from './saga';

const Wrapper = styled.div`
  position: relative;
`;

export function FakeCool({ data, error, pending, onMountData }) {
  useInjectReducer({ key: 'fakeCool', reducer });
  useInjectSaga({ key: 'fakeCool', saga });

  useEffect(() => {
    onMountData();
  }, []);

  return (
    <Wrapper>
      {pending && (
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      )}
      {error && error.statusText && !pending && (
        <AlertMessage color="danger">{error.statusText}</AlertMessage>
      )}
      {data && data.cool && <div>{data.cool}</div>}
      <br />
      <Button color="primary" onClick={onMountData}>
        FakeCool Update
      </Button>
    </Wrapper>
  );
}

FakeCool.propTypes = {
  onMountData: PropTypes.func,
  data: PropTypes.object,
  error: PropTypes.object,
  pending: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectFakeCool(),
  error: makeSelectFakeCoolError(),
  pending: makeSelectFakeCoolPending(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMountData: () => dispatch(getFakeCool()),
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
)(FakeCool);
