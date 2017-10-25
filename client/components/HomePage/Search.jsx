import React from 'react';


const Search = (props) => {
  return (
    <div id="search-container">
      <form onSubmit={props.search}>
        <input type="text" placeholder="search"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
