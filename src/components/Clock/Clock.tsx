import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  currentTime: string;
}

export class Clock extends React.Component<Props, State> {
  today = new Date();

  state = {
    hasClock: true,
    currentTime: this.today.toUTCString().slice(-12, -4),
  };

  clockTimerId = 0;

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      this.today = new Date();
      const newTime = this.today.toUTCString().slice(-12, -4);

      this.setState({ currentTime: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
