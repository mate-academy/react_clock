import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  time: string;
}

export class Clock extends Component<Props, State> {
  static getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  state = {
    time: Clock.getCurrentTime(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
      this.setState({
        time: Clock.getCurrentTime(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
