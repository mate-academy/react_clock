import React from 'react';

export type State = {
  time: string;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    time: '',
  };

  timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());

      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      this.state.time
    );
  }
}
