import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  private clockInterval: number | null = null;

  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.clockInterval = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(currentTime);

      this.setState({ time: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.clockInterval !== null) {
      window.clearInterval(this.clockInterval);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
