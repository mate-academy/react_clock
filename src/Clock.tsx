import React from 'react';

type State = {
  date: string
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();
      this.setState({ date: date.toLocaleTimeString() });
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    const { date } = this.state;

    return (
      <>
        <h1>React clock</h1>
        <p>{`Current time: ${date}`}</p>
      </>
    );
  }
}
