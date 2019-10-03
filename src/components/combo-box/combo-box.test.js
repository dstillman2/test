import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ComboBoxHooks from '.';
import { StateProvider, MainProvider, reducerOne, reducerTwo } from '../../state-management';

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
      <StateProvider reducer={reducerOne} initialState={{ test: 0 }}>
        <MainProvider reducer={reducerTwo} initialState={{ test: 5 }}>
          <ComboBoxHooks ref={newRef} />
        </MainProvider>
      </StateProvider>
    ), container);
  });
});
 