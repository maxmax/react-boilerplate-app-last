/**
 * PostPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import Post from 'containers/Post';

export default function PostPage(props) {
  const { match } = props;

  return (
    <article>
      <Post slug={match.params.id} />
    </article>
  );
}
