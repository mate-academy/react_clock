/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

function getFormatedTime(time: Date): string {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  clockId: NodeJS.Timer | undefined = undefined;

  componentDidMount(): void {
    this.clockId = setInterval(() => {
      this.setState({ today: new Date() });

      console.info(getFormatedTime(new Date()));
    }, 1000);
  }

  componentDidUpdate({ clockName }: Readonly<Props>): void {
    if (clockName !== this.props.clockName) {
      console.debug(`Renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.clockId) {
      clearInterval(this.clockId);
    }
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormatedTime(today)}
        </span>
      </div>
    );
  }
}
