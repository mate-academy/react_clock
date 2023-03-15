import { Component } from 'react';

interface Props {
  clockName: string,
}

interface State {
  date: Date,
}

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const prevClockName = prevProps.clockName;
    const currClockName = this.props.clockName;

    if (prevClockName !== currClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${currClockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
