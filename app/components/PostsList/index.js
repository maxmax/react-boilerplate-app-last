import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import PostCard from 'components/PostCard';

function dataList({ pending, error, data }) {
  if (pending) {
    return <List component={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (data !== false) {
    return <List items={data} component={PostCard} />;
  }

  return null;
}

dataList.propTypes = {
  pending: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default dataList;
