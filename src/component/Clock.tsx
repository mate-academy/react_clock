import React from 'react';

type State = {
  date: string,
  timerId: NodeJS.Timer | undefined;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
    timerId: undefined,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line no-console
      console.log(this.state.date);

      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return this.state.date;
  }
}
