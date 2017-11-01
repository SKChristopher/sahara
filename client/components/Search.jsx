import React from 'react';
import FontAwesome from 'react-fontawesome';

import './../styles/search.scss';

const Search = (props) => {
  return (
    <div id="search-container">
      <form onSubmit={props.search}>
        <input autocomplete="off" type="text" name="search" placeholder="search"></input>
        <button id="searchButton" type="submit"><FontAwesome id="searchIcon" name="search"/> Search</button>
      </form>
      <form onSubmit={props.clearSearch} >
        <button>Clear Search</button>
      </form>
    </div>
  );
}

export default Search;
