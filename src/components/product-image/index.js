import React from 'react';
import { useStateContext } from '../../state/context/core';
import { StyledImage } from './css';

function ProductImage(props) {
  const [state] = useStateContext();

  return (
    <StyledImage>
      {state.numberOfGears}
      {props.children}
    </StyledImage>
  )
}

export default ProductImage;