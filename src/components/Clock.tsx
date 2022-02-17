import React from 'react';

type State = {
  timerId: NodeJS.Timeout,
  date: string,
};

class Clock extends React.Component<{}, State> {
  state = {
    timerId: setInterval(() => {}, 0),
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      // eslint-disable-next-line
      console.log(new Date().toLocaleTimeString());
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date}
      </p>
    );
  }
}

export default Clock;
