import React from 'react';

type ClockTime = NodeJS.Timer | null;

interface Props {
  name: string;
}

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId: ClockTime = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.timeGo();

      // eslint-disable-next-line
      console.log(`time ${(this.state.date).toLocaleTimeString()}`);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  timeGo() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
