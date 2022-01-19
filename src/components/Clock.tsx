import React from 'react';

type State = {
  time: Date,
};

type Props = {
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString(), '- Clock ID:', this.timerId);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <span>{this.state.time.toLocaleTimeString()}</span>
    );
  }
}
