/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import CategoryPage from 'containers/CategoryPage/Loadable';
import PostPage from 'containers/PostPage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { ProtectedRoute } from 'containers/ProtectedRoute';
import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1100px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path="/features" component={FeaturePage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/news" component={CategoryPage} />
        <Route path="/categories/:id" component={PostPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
