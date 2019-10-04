import styled from 'styled-components';

const StyledMenuButton = styled.button`
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

const StyledMenuList = styled.ul`
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

const StyledMenuContainer = styled.div``;

const StyledMenuListItem = styled.li`
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

export {
  StyledMenuButton,
  StyledMenuList,
  StyledMenuContainer,
  StyledMenuListItem
}