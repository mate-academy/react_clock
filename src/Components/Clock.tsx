import React from 'react';

type State = {
  time: string,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    time: new Date().toLocaleString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleString());
    }, 1000);

    // eslint-disable-next-line no-console
    console.log(this.timerId);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <p data-cy="time">
        {time}
      </p>
    );
  }
}
