import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ComboBox from '.';
import { StateProvider, reducer } from '../../state-management';

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
  
  act(() => {
    ReactDOM.render((
      <StateProvider reducer={reducer} initialState={{}}>
        <ComboBox ref={newRef} />
      </StateProvider>
    ), container);
  });
});
 