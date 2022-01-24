import React from 'react';

type State = {
  date: string;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Clock Mount');
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('Clock Unmounted');
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return this.state.date;
  }
}
