import React from 'react';

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

interface State {
  currentTime: string;
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getCurrentTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentTime: getCurrentTime(),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
