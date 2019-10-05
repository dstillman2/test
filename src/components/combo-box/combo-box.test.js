import React from 'react';
import ReactDOM from 'react-dom';
import ComboBox from '.';
import StateProvider from '../../state/context/core';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders the combo box hooks component', () => {
  const newRef = React.createRef();
  
  ReactDOM.render((
    <StateProvider>
      <ComboBox ref={newRef} />
    </StateProvider>
  ), container);
});
 