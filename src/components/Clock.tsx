import React from 'react';

type State = {
  currentTime: string | null;
};

export class Clock extends React.Component<{}, State> {
  timerId: NodeJS.Timer | null = null;

  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        Current time:
        {' '}
        {this.state.currentTime}
      </>
    );
  }
}
