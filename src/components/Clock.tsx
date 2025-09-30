import React from 'react';

function getFormattedTime(time: Date): string {
  return time.toUTCString().slice(-12, -4);
}

type Props = {
  today: Date;
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;

  state: State = {
    currentTime: this.props.today,
  };

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date() });

      // eslint-disable-next-line no-console
      console.log(getFormattedTime(this.state.currentTime));
    }, 1000);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return nextProps.name !== this.props.name;
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // eslint-disable-next-line no-console
    console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
