import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Root react application function
 */
const App = () => {
  return <div>Hello World</div>
}

/**
 * Render it to the DOM
 */
const container = document.querySelector('.container');
ReactDOM.render(<App />, container);
