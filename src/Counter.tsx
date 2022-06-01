import React from 'react';

export class Counter extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    time: new Date().toLocaleTimeString(),
    // eslint-disable-next-line react/no-unused-state
    timerId: undefined,
    // eslint-disable-next-line react/no-unused-state
    isCounterVisible: true,
  };

  timerId?: NodeJS.Timer ;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();
      // eslint-disable-next-line react/no-access-state-in-setstate

      // eslint-disable-next-line react/no-unused-state
      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  // eslint-disable-next-line react/no-typos
  componentWillUnMount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </div>
    );
  }
}
