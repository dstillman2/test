import styled from 'styled-components';

const StyledWrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: #e4e4e4;
  height: 70px;
`;

const StyledLogo = styled.div`
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

const StyledNavigation = styled.nav``;

export {
  StyledWrapper,
  StyledLogo,
  StyledNavigation
}