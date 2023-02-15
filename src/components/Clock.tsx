import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function stringDate(info: Date) {
  return info.toUTCString().slice(-12, -4);
}

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  status: boolean;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    window.setInterval(this.timerId, 3300);
    window.setInterval(this.updateDate, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<{ clockName: string }>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName} `);
    }
  }

  timerId = () => {
    if (this.props.status) {
      this.setState({ clockName: getRandomName() });
    }
  };

  updateDate = () => {
    this.setState({ today: new Date() });
    if (this.props.status) {
      console.info(stringDate(this.state.today));
    }
  };

  render() {
    return (
      <>
        {this.props.status && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">{stringDate(this.state.today)}</span>
          </div>
        )}
      </>
    );
  }
}
