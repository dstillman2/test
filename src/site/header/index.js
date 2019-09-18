import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: #333;
  height: 50px;
`;

const Logo = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 150px;
  display: flex;
  margin: 0 0 0 10px;
  justify-content: center;
  background: #f1f1f1;
  align-items: center;
  border: 1px solid #aaa;
`;

const Navigation = styled.nav``;

const MenuButton = styled.button`
  margin: 0 10px;
  border: 0;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  background: transparent;

  @media (min-width: 576px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 50px;
  right: 0;
  margin: 0;
  padding: 0;
  background: #000;
  border: 2px solid #000;

  @media only screen and (min-width: 576px) {
    display: block;
    position: static;
    background: transparent;
    border: 0;
  }
`;

const MenuContainer = styled.div``;

const MenuListItem = styled.li`
  display: block;
  border-bottom: 1px solid #f1f1f1;
  list-style-type: none;
  padding: 0 10px;

  &:last-child {
    border-bottom: 0;
  }

  @media only screen and (min-width: 576px) {
    display: inline-block;
    border: 0;
  }
`;

const MenuListLink = styled.a`
  text-decoration: none;
  
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (min-width: 576px) {
    color: #fff;
    text-decoration: none;
  }
`;

export default class Header extends React.Component {
  state = {
    isMenuButtonOpen: false,
    hasError: false
  }

  onMenuButtonClick = () => {
    this.setState(prevState => ({
      isMenuButtonOpen: ! prevState.isMenuButtonOpen
    }));
  }

  render() {
    return (
      <Wrapper>
        <Logo>Logo</Logo>
        <Navigation>
          <MenuContainer>
            <MenuButton onClick={this.onMenuButtonClick}>≡</MenuButton>
            <MenuList isOpen={this.state.isMenuButtonOpen}>
              <MenuListItem>
                <MenuListLink href="#">Home</MenuListLink>
              </MenuListItem>
              <MenuListItem>
                <MenuListLink href="#">About</MenuListLink>
              </MenuListItem>
              <MenuListItem>
                <MenuListLink href="#">Products</MenuListLink>
              </MenuListItem>
              <MenuListItem>
                <MenuListLink href="#">Contact</MenuListLink>
              </MenuListItem>
            </MenuList>
          </MenuContainer>
        </Navigation>
      </Wrapper>
    );
  };
}