import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="App__time">
          Current time:
          {' '}
          {this.state.time.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
