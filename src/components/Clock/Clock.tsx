import React from 'react';

type State = {
  date: Date;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date(),
  };

  timerId: NodeJS.Timer | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <p>{this.state.date.toLocaleTimeString()}</p>
    );
  }
}
