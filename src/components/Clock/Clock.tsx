import React from 'react';

interface State {
  time: string;
}

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {});

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p data-cy="time">
        {this.state.time}
      </p>
    );
  }
}
