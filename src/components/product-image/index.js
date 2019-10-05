import React from 'react';
import { useStateContext } from '../../state/context/core';
import { StyledImage } from './css';

function ProductImage(props) {
  const [state] = useStateContext();

  return (
    <StyledImage>
      <div data-test-styled-image>{state.numberOfGears}</div>
      {props.children}
    </StyledImage>
  )
}

export default ProductImage;