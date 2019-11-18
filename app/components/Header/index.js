import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Button from 'components/Button';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';
import messages from './messages';

const Wrapper = styled.div`
  position: relative;
`;

const AuthorizedWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

function Header({ authorized, logout }) {
  return (
    <Wrapper>
      <A href="/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/news">
          <FormattedMessage {...messages.news} />
        </HeaderLink>
        {!authorized && (
          <HeaderLink to="/auth">
            <FormattedMessage {...messages.auth} />
          </HeaderLink>
        )}
        {authorized && (
          <AuthorizedWrapper>
            <HeaderLink to="/profile">
              <FormattedMessage {...messages.profile} />
            </HeaderLink>
            <Button color="link" onClick={logout}>
              Logout
            </Button>
          </AuthorizedWrapper>
        )}
      </NavBar>
    </Wrapper>
  );
}

Header.propTypes = {
  authorized: PropTypes.bool,
  logout: PropTypes.func,
};

export default Header;
