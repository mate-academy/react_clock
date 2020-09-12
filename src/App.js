import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
