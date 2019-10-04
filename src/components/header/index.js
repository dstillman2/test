import React from 'react';
import {
  StyledWrapper,
  StyledLogo,
  StyledNavigation
} from './css';
import HeaderMenu from '../header-menu';

function Header() {
  return (
    <StyledWrapper>
      <StyledLogo></StyledLogo>
      <StyledNavigation>
        <HeaderMenu />
      </StyledNavigation>
    </StyledWrapper>
  );
}

export default Header;