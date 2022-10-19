import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const {
      clockName,
    } = this.props;

    const {
      currentTime,
    } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
