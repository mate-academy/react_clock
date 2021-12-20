import React from 'react';

type State = {
  date: string,
};

export class Clock extends React.Component<{}, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return this.state.date;
  }
}
