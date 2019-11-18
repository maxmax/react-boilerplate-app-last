/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import Categories from 'containers/Categories';

export default function CategoryPage() {
  return (
    <article>
      <Categories />
    </article>
  );
}
