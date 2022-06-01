import React from 'react';

type State = {
  time: string;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());

      this.setState({
        time: date.toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <b data-cy="time">
        {time}
      </b>
    );
  }
}
