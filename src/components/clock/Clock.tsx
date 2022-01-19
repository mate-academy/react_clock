import React from 'react';

type State = {
  currentTime: Date,
};

class Clock extends React.Component<{}, State> {
  state: State = {
    currentTime: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.currentTime.toLocaleTimeString());
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="clock">
        <h1 className="clock__title">React clock</h1>
        <p className="clock__time">
          Current time:
          {' '}
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default Clock;
