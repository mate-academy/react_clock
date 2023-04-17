import { Component } from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: Date;
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      /* eslint-disable */
      console.info(`${this.state.today.toUTCString().slice(-12, -4)}`);
      /* eslint-enable */
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      /* eslint-disable */
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`)
      /* eslint-enable */
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
