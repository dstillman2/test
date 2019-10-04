import _ from 'underscore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMenuButton,
  StyledMenuList,
  StyledMenuContainer,
  StyledMenuListItem
} from './css';

function HeaderMenu() {
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

  return (
    <StyledMenuContainer onClick={event => event.stopPropagation()}>
      <StyledMenuButton onClick={event => setIsMenuOpen(! isMenuOpen)}>≡</StyledMenuButton>
      <StyledMenuList isOpen={isMenuOpen}>
        <StyledMenuListItem>
          <Link to="/">Home</Link>
        </StyledMenuListItem>
        <StyledMenuListItem>
          <Link to="product">Product</Link>
        </StyledMenuListItem>
      </StyledMenuList>
    </StyledMenuContainer>
  );
}

export default HeaderMenu;