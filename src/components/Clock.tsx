import React from 'react';

type Props = {
  name: string;
  today: Date;
  hasClock: boolean;
  timerId: number;
};

export class Clock extends React.Component<Props> {
  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // const currentTime = new Date();
      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentDidUpdate(prevState: Readonly<Props>): void {
    if (prevState.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.props.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
