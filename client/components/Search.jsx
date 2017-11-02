import React from 'react';
import FontAwesome from 'react-fontawesome';

import './../styles/search.scss';

const Search = (props) => {
  return (
    <div id="search-container">
      <form onSubmit={props.search}>
        <input onChange={props.searchChange} autocomplete="off" type="text" name="search" placeholder="search"></input>
        <button id="searchButton" type="submit"><FontAwesome id="searchIcon" name="search"/></button>
      </form>
      <form onSubmit={props.clearSearch} >
        <button id="clear-search-button" >Clear Search</button>
      </form>
    </div>
  );
}

export default Search;
