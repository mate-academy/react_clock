import { Component } from 'react';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<{
  clockName: string,
  hasClock: boolean,
  timerId: number,
}, {}> {
  state = {
    date: new Date(),
  };

  timerId = this.props.timerId;

  clockName = this.props.clockName;

  hasClock = this.props.hasClock;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ date: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.date);
      }
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.props;
    const { date } = this.state;

    return (
      <>
        {(hasClock)
          ? (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {date.toUTCString().slice(-12, -4)}
              </span>
            </div>
          )
          : ('No clock')}
      </>
    );
  }
}
