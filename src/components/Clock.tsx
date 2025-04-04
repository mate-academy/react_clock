import React from 'react';

function getTime() {
  return new Date().toUTCString().slice(-12, -4);
}

interface Props {
  clockName: string;
}

interface State {
  time: ReturnType<typeof getTime>;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: getTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newTime = getTime();

      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const prevName = prevProps.clockName;
    const currentName = this.props.clockName;

    if (prevName !== currentName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
