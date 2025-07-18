import React from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    now: new Date(),
  };

  clockTimer = 0;

  componentDidMount(): void {
    this.clockTimer = window.setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    // eslint-disable-next-line no-console
    console.log(this.state.now.toUTCString().slice(-12, -4));
  }

  componentWillUnmount() {
    if (this.clockTimer) {
      window.clearInterval(this.clockTimer);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.now.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
