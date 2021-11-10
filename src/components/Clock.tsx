import React from 'react';

type Props = {};

interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <p>
        {`Current time: ${this.state.date.toLocaleTimeString()}`}
      </p>
    );
  }
}
