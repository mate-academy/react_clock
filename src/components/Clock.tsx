import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerId = 0;

  nameId = 0;

  name = this.props.name;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);

    this.nameId = window.setInterval(() => {
      this.name = this.state.clockName;
      this.state.clockName = getRandomName();
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.name} to ${prevState.clockName}`);

      this.name = prevState.clockName;
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.nameId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
