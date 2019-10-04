import styled from 'styled-components';

const StyledMain = styled.main`
  display: block;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

const StyledOptions = styled.div`
  flex: 1;
  text-align: center;
`;

const StyledFooter = styled.footer`
  background: #f1f1f1;
  height: 50px;
`;

export {
  StyledMain,
  StyledOptions,
  StyledFooter
}