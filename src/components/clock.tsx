import { Component } from 'react';

function getFormattedTime() {
  return new Date().toUTCString().slice(-12, -4);
}

interface Props {
  clockName: string;
}

interface State {
  currentTime: string;
}

export class Clock extends Component<Props, State> {
  state = {
    currentTime: getFormattedTime(),
  };

  interval: number | null = null;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ currentTime: getFormattedTime() });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
