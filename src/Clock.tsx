import React from 'react';

type State = {
  time: Date;
};

export class Clock extends React.Component<{ name: string }, State> {
  state = {
    time: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState(
        {
          time: new Date(),
        },
        () => {
          // eslint-disable-next-line no-console
          console.log(this.state.time.toUTCString().slice(-12, -4));
        },
      );
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </>
    );
  }
}
