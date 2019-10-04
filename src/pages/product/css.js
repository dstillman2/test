import styled from 'styled-components';

const StyledApplication = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: #f9f9f9;
`;

const StyledMainRegion = styled.main`
  flex: 1;
`;

const StyledFooter = styled.footer`
  background: #f1f1f1;
  height: 50px;
`;

export {
  StyledApplication,
  StyledMainRegion as StyledMain,
  StyledFooter
}