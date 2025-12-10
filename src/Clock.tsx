import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTime = new Date();

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="Clock__time">
        {this.state.time.toUTCString().slice(-12, -4)}
      </span>
    );
  }
}
