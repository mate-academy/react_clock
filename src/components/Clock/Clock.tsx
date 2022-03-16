import React from 'react';

type State = {
  date: string,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());

      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <span>{date}</span>
    );
  }
}
