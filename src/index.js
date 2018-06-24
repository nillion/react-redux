import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import { SearchBar } from './components/searchbar';

const API_KEY = 'AIzaSyA8fsMTdCl04gSl_ecbFcLHdY1bC7XELD8';

/**
 * Root react application
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.initializeState();
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }

  initializeState() {
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'Deep House' }, data => {
      this.setState({ videos: data });
      console.log('Fetch result', data);
    });
  }
}

/**
 * DOM container
 */
const container = document.querySelector('.container');
ReactDOM.render(<App />, container);
