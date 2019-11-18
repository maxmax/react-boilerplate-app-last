/**
 *
 * Article.js
 *
 * Renders an App/Info Card, enforcing the usage of the name, description, url tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'utils/style';
import H1 from 'components/H1';

const ArticleStyled = styled.div`
  font-size: 0.8em;
  padding: 0px;
  margin: 0px auto;
  width: 100%;
  .has-large-font-size {
    font-size: 1.4em;
  }
  .wp-block-gallery {
    /*display: none;*/
    padding: 0;
    margin: 0 -5px 0 -5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    .blocks-gallery-item {
      list-style: none;
      padding: 0 5px 0 5px;
      margin: 0;
      img {
        max-width: 100%;
      }
    }
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
`;

function Article(props) {
  // const { title, date, excerpt, type, featuredImage, slug } = props;
  const { title, type, date, featuredImage, content } = props;

  console.log(
    'Article wp-block-gallery',
    document.getElementsByClassName('wp-block-gallery'),
  );

  return (
    <ArticleStyled className={type}>
      {title && title.rendered && <H1>{title.rendered}</H1>}
      {date && (
        <div>
          <small>{date}</small>
        </div>
      )}
      {featuredImage && <Thumbnail src={featuredImage} />}
      <br />
      <br />
      {content && content.rendered && <div dangerouslySetInnerHTML={{ __html: content.rendered }} />}
    </ArticleStyled>
  );
}

Article.propTypes = {
  title: PropTypes.object,
  date: PropTypes.string,
  featuredImage: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.object,
  // slug: PropTypes.string,
};

export default Article;
