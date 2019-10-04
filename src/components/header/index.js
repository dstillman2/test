import _ from 'underscore';
import React, { useEffect, useState } from 'react';
import {
  StyledWrapper,
  StyledLogo,
  StyledNavigation,
  StyledMenuButton,
  StyledMenuList,
  StyledMenuContainer,
  StyledMenuListItem,
  StyledMenuListLink
} from './css';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../error-boundary';

export default function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(function() {
    const debouncedShouldHideMenu = _.debounce(() => {
      if (window.outerWidth > 576) {
        setIsMenuOpen(false);
      }
    }, 100);

    window.addEventListener('resize', debouncedShouldHideMenu);
  
    return function removeWindowClickListener() {
      window.removeEventListener('resize', debouncedShouldHideMenu);
    }
  });

  useEffect(function() {
    const callback = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('click', callback);

    return () => {
      window.removeEventListener('click', callback);
    }
  });

  function onMenuButtonClick(event) {
    setIsMenuOpen(! isMenuOpen);
  }

  return (
    <ErrorBoundary>
      <StyledWrapper>
        <StyledLogo></StyledLogo>
        <StyledNavigation>
          <StyledMenuContainer onClick={event => event.stopPropagation()}>
            <StyledMenuButton onClick={onMenuButtonClick}>≡</StyledMenuButton>
            <StyledMenuList isOpen={isMenuOpen}>
              <StyledMenuListItem>
                <Link to="/">Home</Link>
              </StyledMenuListItem>
              <StyledMenuListItem>
                <Link to="product">Product</Link>
              </StyledMenuListItem>
              <StyledMenuListItem>
                <StyledMenuListLink href="#">Products</StyledMenuListLink>
              </StyledMenuListItem>
              <StyledMenuListItem>
                <StyledMenuListLink href="#">Contact</StyledMenuListLink>
              </StyledMenuListItem>
            </StyledMenuList>
          </StyledMenuContainer>
        </StyledNavigation>
      </StyledWrapper>
    </ErrorBoundary>
  );
}