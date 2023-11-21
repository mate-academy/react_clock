import React from 'react';

type Props = {
  clockName: string
};

type State = {
  today: string
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  clockId = 0;

  newClockName = '';

  savedClockName = '';

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockId);
  }

  render() {
    const {
      today,
    } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
