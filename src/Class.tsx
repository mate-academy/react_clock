import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  name: string;
};

type State = {
  clockName: string;
  today: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId1 = 0;

  timerId2 = 0;

  componentDidMount(): void {
    this.timerId1 = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }


  componentWillUnmount(): void {
    window.clearInterval(this.timerId1);
    window.clearInterval(this.timerId2);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
