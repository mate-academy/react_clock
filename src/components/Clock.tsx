/* eslint-disable no-console */
import React from 'react';

type Props = {
};

type State = {
  newDate: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    newDate: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ newDate: date.toLocaleTimeString() });
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { newDate } = this.state;

    return (
      <p data-cy="time">
        Current time:
        {' '}
        {newDate}
      </p>
    );
  }
}
