import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyA8fsMTdCl04gSl_ecbFcLHdY1bC7XELD8';

/**
 * Root react application function
 */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

/**
 * DOM container
 */
const container = document.querySelector('.container');
ReactDOM.render(<App />, container);
