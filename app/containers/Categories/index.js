/**
 *
 * Categories
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import H2 from 'components/H2';
import AlertMessage from 'components/AlertMessage';
import Loader, { LoaderOverlay } from 'components/Loader';
import AppCard from 'components/AppCard';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectCategories,
  makeSelectCategoriesError,
  makeSelectCategoriesPending,
} from './selectors';
import { getCategories } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  position: relative;
`;

export function Categories({ data, error, pending, onMountData }) {
  useInjectReducer({ key: 'categories', reducer });
  useInjectSaga({ key: 'categories', saga });

  useEffect(() => {
    onMountData();
  }, []);

  return (
    <Wrapper>
      <H2>
        <FormattedMessage {...messages.header} />
      </H2>
      {pending && (
        <LoaderOverlay>
          <Loader />
        </LoaderOverlay>
      )}
      {error && error.statusText && !pending && (
        <AlertMessage color="danger">{error.statusText}</AlertMessage>
      )}
      {data && <AppCard {...data} />}
      <Button color="primary" onClick={onMountData}>
        Update
      </Button>
    </Wrapper>
  );
}

Categories.propTypes = {
  onMountData: PropTypes.func,
  data: PropTypes.object,
  error: PropTypes.object,
  pending: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectCategories(),
  error: makeSelectCategoriesError(),
  pending: makeSelectCategoriesPending(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMountData: () => dispatch(getCategories()),
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
)(Categories);
