import React from 'react';
import Routes from './routes';
import { createBrowserHistory } from 'history';

class App extends React.Component {
  render() {
    if(!localStorage.pbfavorites) localStorage.setItem('pbfavorites', JSON.stringify([]));
    if(!localStorage.pbstars) localStorage.setItem('pbstars', JSON.stringify([]));
    return (
      <Routes history={ createBrowserHistory() }/>
    );
  }
}

export default App;
