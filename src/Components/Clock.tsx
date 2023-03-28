import React from 'react';

type State = {
  currentTime: string;
};

type Props = {
  name: string;
};

function getFormattedTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: getFormattedTime(new Date()),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.timeUpdate, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  timeUpdate = () => {
    const updatedTime = getFormattedTime(new Date());

    this.setState({
      currentTime: updatedTime,
    });

    window.console.info(updatedTime);
  };

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

export default Clock;
