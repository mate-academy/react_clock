import React from 'react';

type Props = {
  name: string;
};

type ClockState = {
  currentTime: string;
};

export class Clock extends React.Component<Props, ClockState> {
  private timerId?: number;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: newDate });
      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
