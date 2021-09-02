/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';

type Props = {
  name: number,
};

type State = {
  date: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  interval: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <h1 className="clock__title">
          React clock
          {' '}
          {name}
        </h1>
        <p className="clock__time">
          Current time:
          {' '}
          <strong>
            {date}
          </strong>
        </p>
      </div>
    );
  }
}
