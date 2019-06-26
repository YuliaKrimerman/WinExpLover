import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './Popular';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popular />, div);
  ReactDOM.unmountComponentAtNode(div);
});
