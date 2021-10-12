import React from 'react';

type Props = {
  name: number,
};

interface State {
  date: Date,
}

export class Clock extends React.Component<Props, State> {
  private clockTimer?: number;

  state: State = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { date } = this.state;

    return (
      <p className="clock-time">
        {`Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}
