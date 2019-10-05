import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";
import Product from './';
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

it('renders without crashing', () => {
  ReactDOM.render((
    <StateProvider>
      <Product />
    </StateProvider>
  ), container);

  const numberOfGears = () => (
    Number(container.querySelector('[data-test-styled-image]').innerHTML.trim())
  );

  expect(numberOfGears()).toBe(0);

  const button = container.querySelector('[data-test-product-button]');

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(numberOfGears()).toBeGreaterThan(0);
  expect(numberOfGears()).toBeLessThan(10);
});
