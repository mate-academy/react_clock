import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState((prev => ({
        ...prev,
        currentTime: new Date(),
      })));
      // eslint-disable-next-line
      console.info(`${this.state.currentTime.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps !== this.props) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
