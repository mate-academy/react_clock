import { Component } from 'react';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<{
  date: Date,
  clockName: string,
  hasClock: boolean,
  timerId: number,
}, {}> {
  timerId = this.props.timerId;

  clockName = this.props.clockName;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const oldName = this.props.clockName;

      this.clockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Перейменовано з ${oldName} на ${this.props.clockName}`);
    }, 3300);
  }

  render() {
    const { date, clockName, hasClock } = this.props;

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
