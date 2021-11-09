import React from 'react';

interface State {
  now: Date;
}

export class Clock extends React.Component<{}, State> {
  timerId: NodeJS.Timeout | undefined;

  state = {
    now: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { now } = this.state;

    return (
      <>
        <span>{now.toLocaleTimeString()}</span>
      </>
    );
  }
}
