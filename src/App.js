import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {};

  render() {
    setTimeout(() => {
      const date = new Date();

      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

export default App;
