import React from 'react';

type Props = {
  clockName: string,
  isVisible: boolean,
};

type State = {
  clockdate: Date,
  timer: number,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    clockdate: new Date(),
    timer: 0,
  };

  componentDidMount() {
    this.state.timer = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevName: Props): void {
    if (prevName.clockName !== this.props.clockName && this.props.isVisible) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to Clock-${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timer);
  }

  tick() {
    this.setState({
      clockdate: new Date(),
    });

    if (this.props.isVisible) {
      // eslint-disable-next-line no-console
      console.info(this.state.clockdate.toUTCString().slice(-12, -4));
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.clockdate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
