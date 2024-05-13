import React from 'react';

function removeTimezone(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    time: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ time: newDate });
      // eslint-disable-next-line no-console
      console.log(removeTimezone(newDate));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{removeTimezone(this.state.time)}</span>
      </div>
    );
  }
}
