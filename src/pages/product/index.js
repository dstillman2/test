import React, { useRef } from 'react';
import ComboBox from '../../components/combo-box';
import { setNumberOfGears } from '../../state/actions/main.action';
import { useStateContext } from '../../state/context/core';

import { StyledMain } from './css';

function ProductPage() {
  const [state, dispatch] = useStateContext();

  const onClick = () => {
    const gears = Math.floor(Math.random() * 10) + 1;
    dispatch(setNumberOfGears(gears, dispatch));
  };

  return (
    <StyledMain>
      <button onClick={onClick}>
        Change Gears
      </button>
      <div>
        {state.numberOfGears}
      </div>
    </StyledMain>
  );
};

export default ProductPage;