/**
 *
 * Post
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Article from 'components/Article';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectPost,
  makeSelectPostError,
  makeSelectPostPending,
} from './selectors';
import { getPost } from './actions';
import reducer from './reducer';
import saga from './saga';

const Wrapper = styled.div`
  position: relative;
`;

export function Post({ slug, data, error, pending, onMountData }) {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });
  // const [state, updateState] = useState({ currentPage: 1 });

  useEffect(() => {
    onMountData(slug);
  }, []);

  return <Wrapper>{data && data.title && <Article {...data} />}</Wrapper>;
}

Post.propTypes = {
  onMountData: PropTypes.func,
  data: PropTypes.object,
  error: PropTypes.object,
  pending: PropTypes.bool,
  slug: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectPost(),
  error: makeSelectPostError(),
  pending: makeSelectPostPending(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMountData: slug => dispatch(getPost(`${slug}`)),
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
)(Post);
