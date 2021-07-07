import React from 'react';

import './App.scss';

class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {`Current time: ${time.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}

export default Clock;
