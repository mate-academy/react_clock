import { Component } from 'react';

type State = {
  currentTime: string;
};

type Props = {
  name: string;
};

function getFormattedTime(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentTime: getFormattedTime(new Date()),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.handleUpdateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const previousName = prevProps.name;
    const currentName = this.props.name;

    if (previousName !== currentName) {
      window.console.debug(`Renamed from ${previousName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  handleUpdateTime = () => {
    const now = getFormattedTime(new Date());

    this.setState({
      currentTime: now,
    });

    window.console.info(now);
  };

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">

        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
