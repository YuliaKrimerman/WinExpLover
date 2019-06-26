import React from 'react';
import ReactDOM from 'react-dom';
import WineItem from './WineItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WineItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
