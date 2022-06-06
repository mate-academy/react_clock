import React from 'react';

type State = {
  date: Date,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date(),
  };

  timerID?: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <span data-cy="time">
        {`Current time: ${this.state.date.toLocaleTimeString()}`}
      </span>
    );
  }
}
