import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('./sass/main.scss');

ReactDOM.render(
  <App message="Hello, world!" />,
  document.getElementById('app')
);
