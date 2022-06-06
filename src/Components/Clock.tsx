/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';

type Props = {};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      console.log(date.toLocaleTimeString());
      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <span className="clock">
        {this.state.date}
      </span>
    );
  }
}
