import React from 'react';
import { setNumberOfGears } from '../../state/actions/main.action';
import { useStateContext } from '../../state/context/core';
import ProductImage from '../../components/product-image';

import { StyledMain, StyledOptions } from './css';

function ProductPage() {
  const [state, dispatch] = useStateContext();

  const onClick = () => {
    const gears = Math.floor(Math.random() * 10) + 1;
    dispatch(setNumberOfGears(gears, dispatch));
  };

  return (
    <StyledMain>
      <ProductImage />
      <StyledOptions>
        <h2>Mechanisaurus</h2>
        <button onClick={onClick}>
          Change Gears
        </button>
      </StyledOptions>
    </StyledMain>
  );
};

export default ProductPage;