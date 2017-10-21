import React from 'react';

import Main from './Main.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'hello',
    };
  }

  render() {
    return(
      <div id="app-container">
        <Main />
      </div>
    );
  }
}

export default App;
