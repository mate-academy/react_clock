import React from 'react';
import './Clock.scss';

type State = {
  currentTime: Date,
  timerId: NodeJS.Timer | undefined,
};

export class Clock extends React.Component<{}, State> {
  state = {
    currentTime: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ currentTime: new Date() });

        // eslint-disable-next-line
        console.log(this.state.currentTime.toLocaleTimeString());
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="clock">
        <h1 className="clock__title">React clock</h1>
        <p className="clock__time">
          Current time:
          {' '}
          {this.state.currentTime.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
