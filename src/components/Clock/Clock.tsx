import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

function getTimeString(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      window.console.info(getTimeString(newDate));

      this.setState({ currentTime: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name: prevName } = prevProps;
    const { name: currentName } = this.props;

    if (prevName !== currentName) {
      window.console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getTimeString(currentTime)}
        </span>
      </div>
    );
  }
}
