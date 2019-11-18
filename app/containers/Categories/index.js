/**
 *
 * Categories
 *
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import {
  Button,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import H2 from 'components/H2';
import AppCard from 'components/AppCard';
import PostsList from 'components/PostsList';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectCategories,
  makeSelectCategoriesPostsTotal,
  makeSelectCategoriesError,
  makeSelectCategoriesPending,
  makeSelectInfo,
  makeSelectInfoError,
  makeSelectInfoPending,
} from './selectors';
import { getCategories, getInfo } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const PER_PAGE = 2;

const Wrapper = styled.div`
  position: relative;
`;

const PaginationWrapper = styled.div`
  margin: 30px auto 60px;
  display: table;
`;

const FilterWrapper = styled.div`
  margin: 30px auto 60px;
  display: table;
`;

export function Categories({
  infoData,
  infoError,
  infoPending,
  onMountInfo,
  totalPages,
  data,
  error,
  pending,
  onMountData,
  onMountDataCategory,
  onMountDataPage,
  getPagination,
}) {
  useInjectReducer({ key: 'categories', reducer });
  useInjectSaga({ key: 'categories', saga });

  const [state, updateState] = useState({ currentPage: 1 });

  const handlePagination = (e, index) => {
    e.preventDefault();
    updateState({ currentPage: index });
    getPagination(index);
  };

  useEffect(() => {
    onMountInfo();
    onMountData();
  }, []);

  const reposListProps = {
    data,
    pending,
    error,
  };

  const reposInfo = {
    error: infoError,
    pending: infoPending,
    update: onMountInfo,
    ...infoData,
  };

  const { currentPage } = state;

  return (
    <Wrapper>
      <AppCard {...reposInfo} />

      <H2>
        <FormattedMessage {...messages.header} />
      </H2>

      <FilterWrapper>
        <ButtonGroup>
          <Button color="primary" onClick={onMountData}>
            Update Posts
          </Button>
          <Button color="primary" onClick={onMountDataCategory}>
            By dev
          </Button>
          <Button color="primary" onClick={onMountDataPage}>
            Next
          </Button>
        </ButtonGroup>
      </FilterWrapper>

      {<PostsList {...reposListProps} />}
      <br />
      {totalPages > 1 && (
        <PaginationWrapper>
          <Pagination>
            <PaginationItem disabled={currentPage <= 1}>
              <PaginationLink
                onClick={e => handlePagination(e, currentPage - 1)}
                previous
                href="#"
              />
            </PaginationItem>
            { Array.apply(null, {length: totalPages}).map((page, i) =>
              <PaginationItem active={i + 1 === currentPage} key={i + 1}>
                <PaginationLink onClick={(e) => handlePagination(e, i + 1)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem disabled={currentPage >= totalPages}>
              <PaginationLink
                onClick={(e) => handlePagination(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </PaginationWrapper>
      )}
    </Wrapper>
  );
}

Categories.propTypes = {
  onMountData: PropTypes.func,
  onMountInfo: PropTypes.func,
  onMountDataCategory: PropTypes.func,
  onMountDataPage: PropTypes.func,
  data: PropTypes.array,
  error: PropTypes.object,
  pending: PropTypes.bool,
  infoData: PropTypes.object,
  infoError: PropTypes.object,
  infoPending: PropTypes.bool,
  totalPages: PropTypes.number,
  getPagination: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  infoData: makeSelectInfo(),
  infoError: makeSelectInfoError(),
  infoPending: makeSelectInfoPending(),
  data: makeSelectCategories(),
  totalPages: makeSelectCategoriesPostsTotal(),
  error: makeSelectCategoriesError(),
  pending: makeSelectCategoriesPending(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMountData: () => dispatch(getCategories(`?per_page=${PER_PAGE}&page=1`)),
    onMountDataCategory: () => dispatch(getCategories(`?per_page=${PER_PAGE}&page=1&categories=2`)),
    onMountDataPage: () => dispatch(getCategories(`?per_page=${PER_PAGE}&page=2`)),
    getPagination: index =>
      dispatch(getCategories(`?per_page=2&page=${index}`)),
    onMountInfo: () => dispatch(getInfo()),
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
