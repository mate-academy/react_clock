import React from 'react';

type State = {
  date: string,
  timerId: NodeJS.Timer | undefined,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
    timerId: undefined,
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());

      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId as NodeJS.Timeout);
  }

  render() {
    const { date } = this.state;

    return (
      <span>{date}</span>
    );
  }
}
