import React from 'react';
import Routes from './routes';
import { createBrowserHistory } from 'history';

class App extends React.Component {
  render() {
    return (
      <Routes history={ createBrowserHistory() }/>
    );
  }
}

export default App;
