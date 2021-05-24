import React from 'react';

import { Clock } from './components/Clock/Clock';
import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
