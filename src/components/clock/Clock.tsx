import React from 'react';

class Clock extends React.Component {
  state = {
    currentTime: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    const time: NodeJS.Timer = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);

    this.setState({ timerId: time });
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.currentTime.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
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
