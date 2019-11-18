/**
 *
 * PostCard.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Colors } from 'utils/style';
import styled from 'styled-components';

const PostCardStyled = styled.div`
  font-size: 0.8em;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 30px auto;
`;

const PostCardStyledTitle = styled.div`
  color: ${Colors.brand};
  font-size: 1.2em;
`;

const Thumbnail = styled.img`
  max-width: 100%;
`;

function PostCard({ title, date, excerpt, type, featuredImage, slug }) {
  return (
    <PostCardStyled className={type}>
      <Link to={`/categories/${slug}`}>
        {title && title.rendered && (
          <PostCardStyledTitle>{title.rendered}</PostCardStyledTitle>
        )}
        {date && (
          <div>
            <small>{date}</small>
          </div>
        )}
        {featuredImage && <Thumbnail src={featuredImage} />}
        {excerpt && excerpt.rendered && (
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        )}
      </Link>
    </PostCardStyled>
  );
}

PostCard.propTypes = {
  title: PropTypes.object,
  date: PropTypes.string,
  excerpt: PropTypes.object,
  type: PropTypes.string,
  featuredImage: PropTypes.string,
  slug: PropTypes.string,
};

export default PostCard;
