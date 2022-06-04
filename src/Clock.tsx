import React from 'react';

export class Clock extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    time: new Date().toLocaleTimeString(),

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
