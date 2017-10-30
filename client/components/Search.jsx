import React from 'react';

import './../styles/search.scss';

const Search = (props) => {
  return (
    <div id="search-container">
      <form onSubmit={props.search}>
        <input autocomplete="off" type="text" name="search" placeholder="search"></input>
        <button type="submit">Search</button>
      </form>
      <form onSubmit={props.clearSearch} >
        <button>Clear Search</button>
      </form>
    </div>
  );
}

export default Search;