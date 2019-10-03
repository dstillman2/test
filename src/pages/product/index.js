import React, { useRef } from 'react';
import ComboBox from '../../components/combo-box';
import { StateProvider, reducer } from '../../state';
import {
  StyledApplication,
  StyledMainRegion as StyledMain,
  StyledFooter
} from './css';

function ProductPage(props) {
  const refComboBox = useRef();

  return (
    <StateProvider reducer={reducer} initialState={{}}>
      <StyledApplication>
        <StyledMain>
          <ComboBox
            ref={refComboBox}
            name="language"
            items={['french', 'spanish', 'english', 'cherry', 'lorsum']}
          />
        </StyledMain>
        <StyledFooter>
          this is the footer
        </StyledFooter>
      </StyledApplication>
    </StateProvider>
  );
};

export default ProductPage;