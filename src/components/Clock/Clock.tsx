import React from 'react';

type State = {
  currentTime: string | null;
};

export class Clock extends React.Component<{}, State> {
  state = {
    currentTime: null,
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({
        currentTime: date,
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <h1>{this.state.currentTime}</h1>
    );
  }
}
