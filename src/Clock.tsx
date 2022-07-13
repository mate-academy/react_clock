import React from 'react';

type State = {
  date: Date,
};

export class Clock extends React.Component<{}, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        <div className="numbers">
          {date.toLocaleTimeString()}
        </div>
      </div>

    );
  }
}
