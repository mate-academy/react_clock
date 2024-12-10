import React from 'react';

interface State {
  clockName: string;
  today: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ today: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
