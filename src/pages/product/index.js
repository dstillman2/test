import React, { useRef } from 'react';
import ComboBox from '../../components/combo-box-hooks';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from '../../site/header-hooks';
import ErrorBoundary from '../../site/error-boundary';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default function ProductPage(props) {
  const firstComboBox = useRef();
  const secondComboBox = useRef();

  function onButtonClick() {
    secondComboBox.current.focus();
  }

  return (
    <>
      <GlobalStyle />
      <Application>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <Main>
          <button
            onClick={onButtonClick}
          >
            Focus Second ComboBox
          </button>
          <ComboBox
            ref={firstComboBox}
            name="language"
            items={['french', 'spanish', 'english', 'cherry', 'lorsum']}
          />
          <ComboBox
            ref={secondComboBox}
            name="topic"
            items={['apples', 'fruits', 'salaries', 'vegetables', 'eateries']}
          />
        </Main>
        <Footer>
          this is the footer
        </Footer>
      </Application>
    </>
  );
};

const Application = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f9f9f9;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background: #f1f1f1;
  height: 50px;
`;