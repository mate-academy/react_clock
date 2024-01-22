import React from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    // This code starts a timer

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate({ clockName: prevName }: Props) {
    const { clockName } = this.props;

    if (prevName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName() {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
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
          {`${today.toUTCString().slice(-12, -4)}`}
        </span>
      </div>
    );
  }
}
