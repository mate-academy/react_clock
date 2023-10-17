import React from 'react';

type State = {
  currentTime: string
};

type Props = {
  clockName: string
};

export class Clock extends React.PureComponent<Props> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timeTimerId = 0;

  componentDidMount(): void {
    this.timeTimerId = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>):
  void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime}
        </span>
      </div>
    );
  }
}
