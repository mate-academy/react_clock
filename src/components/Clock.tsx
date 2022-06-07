import React from 'react';

type State = {
  time: Date;
};

type Props = {};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  updateTimer = setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.updateTimer;
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  render() {
    return (
      <div data-cy="time">
        {this.state.time}
      </div>
    );
  }
}
