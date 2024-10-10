import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

function getData(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    time: getData(),
  };

  handleTimerChange = () => {
    this.timerId = window.setInterval(() => {
      const newTime = getData();

      this.setState({ time: newTime });
    }, 1000);
  };

  componentDidMount(): void {
    this.handleTimerChange();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const clockNameChanges = prevProps.name !== this.props.name;
    const isTimeChanged = prevState.time !== this.state.time;

    if (isTimeChanged) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }

    if (clockNameChanges) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
