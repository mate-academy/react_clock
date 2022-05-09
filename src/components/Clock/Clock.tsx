import React from 'react';

type State = {
  date: string;
};

export class Clock extends React.Component<{}, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <h2>
        Current time:
        {' '}
        {this.state.date}
      </h2>
    );
  }
}
