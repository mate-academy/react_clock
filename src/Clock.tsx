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
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({ date: date.toLocaleTimeString() });
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
