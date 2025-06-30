import React from 'react';

interface IClockProps {
  name: string;
}

interface IClockState {
  time: string;
}

export class Clock extends React.Component<IClockProps, IClockState> {
  state: Readonly<IClockState> = {
    time: new Date().toUTCString().split(' ')[4],
  };

  private timerId: number = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().split(' ')[4];

      this.setState({ time: currentTime });

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: IClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
