import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    timeNow: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timeNow: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.timeNow.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
