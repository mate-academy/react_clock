import React from 'react';

type Props = {};

interface State {
  time: string,
}

class Clock extends React.Component<Props, State> {
  state = {
    time: '--:--:--',
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

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
    return (
      <>
        {this.state.time}
      </>
    );
  }
}

export default Clock;
