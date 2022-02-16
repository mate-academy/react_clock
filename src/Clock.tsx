import React from 'react';

type State = {
  timerId:NodeJS.Timeout,
  time:string,
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: '',
    timerId: setTimeout(() => { }, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <p>
        Current time:
        <br />
        {' '}
        {this.state.time}
      </p>
    );
  }
}
