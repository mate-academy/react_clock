import React from 'react';

function getFormattedTime(time: Date): string {
  return time.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;

  state: State = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      const time = new Date();

      this.setState({ currentTime: time });

      // eslint-disable-next-line no-console
      console.log(getFormattedTime(time));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{getFormattedTime(currentTime)}</span>
      </div>
    );
  }
}
