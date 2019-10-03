import React from 'react';
import ReactDOM from 'react-dom';
import ProductPage from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ProductPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
