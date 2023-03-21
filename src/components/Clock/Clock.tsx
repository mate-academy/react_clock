import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

function getTimeString(): string {
  return ((new Date()).toUTCString().slice(-12, -4));
}

export class Clock extends Component<Props, State> {
  state = {
    currentTime: getTimeString(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = getTimeString();

      window.console.info(getTimeString());

      this.setState({ currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name: oldName } = prevProps;
    const { name: currentName } = this.props;

    if (oldName !== currentName) {
      window.console.debug(`Renamed from ${oldName} to ${currentName}`);
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
          {currentTime}
        </span>
      </div>
    );
  }
}
