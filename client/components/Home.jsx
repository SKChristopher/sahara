import React from 'react';

import Header from './Header';
import Search from './Search';

class Home extends React.Component {
  render() {
    return(
      <div id="home-container">
        <Header />
        <Search />
      </div>
    );
  }
}

export default Home;
